import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import { AuthProvider } from "./context/auth-provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "TheDAM – Smart Digital Asset Management for Seamless Workflow",
  description:
    "Organize, store, and manage your digital assets effortlessly with TheDAM. Secure cloud storage, easy collaboration, and AI-powered search—built for teams and businesses. Try it today!",
  keywords: [
    "digital asset management, DAM, cloud storage, secure file management, AI search, media management, team collaboration, digital workflow, asset organization, business software",
  ],
  openGraph: {
    title: "TheDAM – Smart Digital Asset Management for Seamless Workflow",
    description:
      "Organize, store, and manage your digital assets effortlessly with TheDAM. Secure cloud storage, easy collaboration, and AI-powered search—built for teams and businesses. Try it today!",
    images: [
      "https://ik.imagekit.io/leywq8vud/DAM%20(SEO)/TUC.png?updatedAt=1740742829801",
    ],
    url: "https://dam-ruby.vercel.app",
  },
  twitter: {
    title: "TheDAM – Smart Digital Asset Management for Seamless Workflow",
    description:
      "Organize, store, and manage your digital assets effortlessly with TheDAM. Secure cloud storage, easy collaboration, and AI-powered search—built for teams and businesses. Try it today!",
    images: [
      "https://ik.imagekit.io/leywq8vud/DAM%20(SEO)/TUC.png?updatedAt=1740742829801",
    ],
    card: "summary_large_image",
    creator: "Vikas Meshram",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
