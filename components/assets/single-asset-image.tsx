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
    <div className="relative aspect-square">
      <IKImage
        src={assetData?.mediaUrl}
        alt={assetData?.title as string}
        style={{
          objectFit: "cover",
        }}
        fill
        sizes="100vw"
      />
    </div>
  );
}
