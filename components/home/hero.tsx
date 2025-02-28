import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap p-5 rounded-3xl bg-secondary">
      <article className="space-y-4 text-center lg:text-left max-w-xl">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
          Effortless Digital Asset Management—Organized, Secure, and Fast
        </h2>
        <p className="text-base">
          Simplify the way you store, manage, and access your digital assets
          with TheDAM. Secure cloud storage, AI-powered search, and seamless
          team collaboration—everything you need to keep your files organized
          and your workflow efficient.
        </p>
        <Button type="button">
          <Link href="/assets">Get Started</Link>
        </Button>
      </article>
      <div className="w-full max-w-md mt-6 lg:mt-0">
        <Image
          src="https://assets-v2.lottiefiles.com/a/fcf25848-117d-11ee-abc6-0f3c085136af/BfA7yHobPY.gif"
          alt="Effortless Digital Asset Management—Organized, Secure, and Fast"
          style={{ objectFit: "cover" }}
          width={500}
          height={500}
          className="w-full h-auto mix-blend-darken"
        />
      </div>
    </div>
  );
};
