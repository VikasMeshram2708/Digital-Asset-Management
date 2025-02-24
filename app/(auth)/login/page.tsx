"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="max-w-lg mx-auto w-full rounded drop-shadow">
        <CardHeader>
          <CardTitle className="text-center text-lg">Login / Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            className="w-full"
            size="lg"
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
