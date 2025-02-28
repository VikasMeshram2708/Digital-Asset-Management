// import { auth } from "@/auth";
import { Hero } from "@/components/home/hero";
import { Preview } from "@/components/home/preview";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import heroImg from "@/public/home/cloud-save.gif";

export default async function Home() {
  // const session = await auth();
  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto px-6 py-2">
        <div className="py-5">
          <Hero />
        </div>
        <Preview />
      </div>
    </main>
  );
}
