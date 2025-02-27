import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import { AuthProvider } from "./context/auth-provider";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <AuthProvider>
          <Navbar />
          {children}
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
