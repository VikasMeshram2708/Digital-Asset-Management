"use client";

import { IKImage } from "imagekitio-next";
import React from "react";

type AssetImageProps = {
  mediaUrl: string;
  title: string;
};
export default function AssetImage(props: AssetImageProps) {
  const { mediaUrl, title } = props;
  return (
    <div className="relative aspect-video">
      <IKImage
        src={mediaUrl ?? ""}
        alt={title ?? ""}
        fill
        sizes="100vw"
        className="bg-cover"
      />
    </div>
  );
}
