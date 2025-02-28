"use client";
import { IKImage } from "imagekitio-next";
import React from "react";

type SingleAssetImageProps = {
  mediaUrl: string;
  title: string;
};
export default function SingleAssetImage(props: SingleAssetImageProps) {
  const assetData = props;
  return (
    <div className="relative aspect-square p-5">
      <IKImage
        src={assetData?.mediaUrl}
        alt={assetData?.title as string}
        fill
        sizes="100vw"
        className="bg-cover"
      />
    </div>
  );
}
