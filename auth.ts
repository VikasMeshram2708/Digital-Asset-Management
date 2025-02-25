import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "./lib/prisma";

const GOOGLE_ID = process.env.AUTH_GOOGLE_ID;
const GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET;
const AUTH_SECRET = process.env.AUTH_SECRET;

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    Google({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
  ],
  secret: AUTH_SECRET,
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
