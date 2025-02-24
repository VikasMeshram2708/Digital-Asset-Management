"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function Navbar() {
  const { status } = useSession();
  return (
    <header className="bg-background w-full border-b-2 drop-shadow">
      <nav className="container mx-auto px-6 py-2 flex items-center justify-between">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
          <Link href="/">Dam</Link>
        </h2>

        {status === "loading" ? (
          <p>processing...</p>
        ) : status === "authenticated" ? (
          <Button
            className="font-bold"
            variant={"destructive"}
            onClick={() => signOut()}
          >
            Logout
            <LogOut />
          </Button>
        ) : (
          <Button variant={"link"}>
            <Link href="/login">Login / Sign Up</Link>{" "}
          </Button>
        )}
      </nav>
    </header>
  );
}
