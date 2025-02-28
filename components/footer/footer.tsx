"use client";

import { mediaItems } from "@/data";
import Link from "next/link";
import React from "react";
import { Icons } from "@/components/icons"; // Assuming you have an Icons component for social media icons

export default function Footer() {
  return (
    <footer className="bg-background w-full border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Section */}
        <section className="flex flex-col items-start gap-4">
          <Link
            href="/"
            className="text-xl md:text-2xl lg:text-3xl font-bold hover:text-primary transition-colors"
          >
            Dam
          </Link>
          <ul className="flex items-center gap-4">
            {Array.isArray(mediaItems) &&
              mediaItems.map((media, idx) => (
                <li key={idx}>
                  <a
                    href={media.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={media.name}
                    className="hover:text-primary transition-colors"
                  >
                    {media.icon} {/* Replace with actual icon rendering */}
                  </a>
                </li>
              ))}
          </ul>
        </section>

        {/* Address Section */}
        <address className="not-italic text-sm text-muted-foreground space-y-1">
          <p>Nagpur, Maharashtra, India</p>
          <p>PinCode - 441110</p>
          <p>
            Contact us on :{" "}
            <a
              href="mailto:support@dam-ruby.vercel.app"
              className="hover:text-primary transition-colors"
            >
              support@dam-ruby.vercel.app
            </a>
          </p>
        </address>
      </div>

      {/* Copyright Section */}
      <div className="border-t py-4">
        <p className="text-center text-sm text-muted-foreground">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://dam-ruby.vercel.app"
            className="hover:text-primary transition-colors"
          >
            dam-ruby.vercel.app
          </a>
        </p>
      </div>
    </footer>
  );
}
