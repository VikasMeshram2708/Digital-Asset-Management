"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { authenticator } from "@/lib/authenticator";
import { ImageKitProvider } from "imagekitio-next";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGE_KIT_URL_ENDPOINT;
  const publicKey = process.env.NEXT_PUBLIC_IMAGE_KIT_PUBLIC_KEY;

  return (
    <SessionProvider>
      <ImageKitProvider
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
      >
        {children}
      </ImageKitProvider>
    </SessionProvider>
  );
};
