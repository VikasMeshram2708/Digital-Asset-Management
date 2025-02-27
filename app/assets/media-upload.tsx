"use client";
import { Progress } from "@/components/ui/progress";
import { IKUpload } from "imagekitio-next";
import { Loader2, XCircle } from "lucide-react"; // Import icons from Lucide
import Image from "next/image";
import React, { useState, useRef } from "react";
import { toast } from "sonner";

export default function MediaUpload() {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false); // Track upload state
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null); // Store the thumbnail URL after upload
  const abortControllerRef = useRef<AbortController | null>(null); // Ref to store the AbortController

  const validateFile = (file: File): boolean => {
    const ALLOWED_IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "webp"];
    const ALLOWED_VIDEO_EXTENSIONS = ["mp4", "mov", "avi", "mkv"];
    const MAX_IMAGE_SIZE_MB = 20;
    const MAX_VIDEO_SIZE_MB = 100;

    const fileNameParts = file.name.split(".");
    const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

    if (file.type.startsWith("image/")) {
      if (!ALLOWED_IMAGE_EXTENSIONS.includes(fileExtension)) {
        toast.error(
          `Unsupported image format. Allowed formats: ${ALLOWED_IMAGE_EXTENSIONS.join(
            ", "
          )}`
        );
        return false;
      }
      if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
        toast.error(`Image size exceeds the limit of ${MAX_IMAGE_SIZE_MB}MB`);
        return false;
      }
    }

    if (file.type.startsWith("video/")) {
      if (!ALLOWED_VIDEO_EXTENSIONS.includes(fileExtension)) {
        toast.error(
          `Unsupported video format. Allowed formats: ${ALLOWED_VIDEO_EXTENSIONS.join(
            ", "
          )}`
        );
        return false;
      }
      if (file.size > MAX_VIDEO_SIZE_MB * 1024 * 1024) {
        toast.error(`Video size exceeds the limit of ${MAX_VIDEO_SIZE_MB}MB`);
        return false;
      }
    }

    toast.success("Media file validated successfully");
    return true;
  };

  const handleCancelUpload = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort(); // Abort the ongoing upload
      toast.info("Upload cancelled");
      setIsUploading(false);
      setProgress(0);
      setThumbnailUrl(null);
    }
  };

  return (
    <div>
      <h2>Upload Media</h2>

      {/* Upload Component */}

      <IKUpload
        fileName="asset"
        folder="/DAM"
        isPrivateFile={false}
        useUniqueFileName={true}
        validateFile={validateFile} // Use the validateFile function
        onUploadStart={() => {
          console.log("Upload started");
          setIsUploading(true); // Set uploading state to true
          setThumbnailUrl(null); // Clear previous thumbnail
          abortControllerRef.current = new AbortController(); // Create a new AbortController
        }}
        onUploadProgress={(progress) => {
          const progressPercentage = Math.round(
            (progress.loaded / progress.total) * 100
          );
          setProgress(progressPercentage);
        }}
        onSuccess={(response) => {
          toast.success("File uploaded successfully");
          console.log("Upload successful:", response);
          setIsUploading(false); // Set uploading state to false
          setThumbnailUrl(response.thumbnailUrl); // Set thumbnail URL from response
          abortControllerRef.current = null; // Clear the AbortController
        }}
        onError={(error) => {
          if (error.message === "AbortError") {
            toast.info("Upload cancelled");
          } else {
            toast.error("Upload failed");
            console.error("Upload error:", error);
          }
          setIsUploading(false); // Set uploading state to false
          abortControllerRef.current = null; // Clear the AbortController
        }}
        // @ts-ignore
        ref={abortControllerRef}
      />

      {/* Progress Bar */}
      {progress > 0 && <Progress value={progress} />}

      {/* Spinner and Cancel Button for Uploading State */}
      {isUploading && (
        <div className="mt-4 flex items-center justify-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin" /> {/* Lucide spinner */}
          <button
            onClick={handleCancelUpload}
            className="flex items-center gap-2 rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
          >
            <XCircle className="h-4 w-4" /> Cancel Upload
          </button>
        </div>
      )}

      {/* Thumbnail Display */}
      {thumbnailUrl && !isUploading && (
        <div className="mt-4">
          <h3>Uploaded Thumbnail</h3>
          <Image
            src={thumbnailUrl}
            alt="Uploaded Thumbnail"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
