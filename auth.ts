import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { env } from "./lib/env";
import prisma from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    Google({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 3600,
  },
  callbacks: {
    async authorized({ auth }) {
      return !!auth;
    },

    async signIn({ profile }) {
      if (!profile) return false;

      const exisintUser = await prisma.user.findUnique({
        where: {
          email: String(profile?.email),
        },
      });

      if (!exisintUser) {
        await prisma.user.create({
          data: {
            name: profile.name ?? "",
            email: profile.email ?? "",
            picture: profile.picture ?? "",
          },
        });
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
