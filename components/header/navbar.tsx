"use client";

import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import { LogOut, Menu } from "lucide-react";
import { navItems } from "@/data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { status } = useSession();
  return (
    <header className="bg-background w-full border-b-2 drop-shadow">
      <nav className="container mx-auto px-6 py-2 flex items-center justify-between">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
          <Link href="/">Dam</Link>
        </h2>

        <ul className="hidden md:flex items-center gap-4">
          {Array.isArray(navItems) &&
            navItems.map((item, idx) => (
              <li key={idx} className="capitalize">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
        </ul>

        <Sheet>
          <SheetTrigger
            className={cn(buttonVariants({ variant: "outline" }), "md:hidden")}
          >
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between">
            <SheetHeader>
              <SheetTitle>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                  <Link href="/">Dam</Link>
                </h2>
              </SheetTitle>
              <SheetDescription asChild>
                <ul className="grid gap-4 py-10">
                  {Array.isArray(navItems) &&
                    navItems.map((item, idx) => (
                      <li key={idx} className="capitalize">
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <section className="w-full">
                {status === "loading" ? (
                  <p>processing...</p>
                ) : status === "authenticated" ? (
                  <Button
                    className="font-bold w-full"
                    variant={"destructive"}
                    onClick={() => signOut()}
                  >
                    Logout
                    <LogOut />
                  </Button>
                ) : (
                  <Button variant={"link"} className="w-full">
                    <Link href="/login">Login / Sign Up</Link>{" "}
                  </Button>
                )}
              </section>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <section className="hidden md:block">
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
        </section>
      </nav>
    </header>
  );
}
