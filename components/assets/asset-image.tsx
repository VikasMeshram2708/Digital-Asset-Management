"use client";
import { IKImage } from "imagekitio-next";
import React, { useState } from "react";

type AssetImageProps = {
  mediaUrl: string;
  title: string;
};

export default function AssetImage(props: AssetImageProps) {
  const { mediaUrl, title } = props;

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Modal for Fullscreen Image View */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)} // Close modal on outside click
        >
          <div className="bg-white p-1 rounded-lg shadow-lg max-w-[500px] max-h-[500px]">
            {/* Reduced padding from p-4 to p-2 */}
            <img
              src={mediaUrl}
              alt={title}
              className="w-full h-full object-contain max-w-[500px] max-h-[500px]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            />
          </div>
        </div>
      )}

      {/* Image Container with Hover Effect */}
      <div
        className="relative aspect-video bg-gray-400/50 overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => setIsModalOpen(true)} // Open modal on click
      >
        {/* Image */}
        <IKImage
          src={mediaUrl ?? ""}
          alt={title ?? ""}
          fill
          sizes="100vw"
          className="bg-cover transition-transform duration-300 transform group-hover:scale-110"
        />

        {/* Overlay for Click Interaction */}
        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-semibold">View</p>
        </div>
      </div>
    </>
  );
}