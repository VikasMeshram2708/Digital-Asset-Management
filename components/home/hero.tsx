import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap p-5 rounded-3xl bg-secondary">
      <article className="space-y-4 text-center lg:text-left max-w-xl">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          libero labore optio, dolores esse nihil?
        </p>
        <Button type="button">Lorem, ipsum.</Button>
      </article>
      <div className="w-full max-w-md mt-6 lg:mt-0">
        <Image
          src="https://assets-v2.lottiefiles.com/a/fcf25848-117d-11ee-abc6-0f3c085136af/BfA7yHobPY.gif"
          alt="upload save"
          style={{ objectFit: "cover" }}
          width={500}
          height={500}
          className="w-full h-auto mix-blend-darken"
        />
      </div>
    </div>
  );
};
