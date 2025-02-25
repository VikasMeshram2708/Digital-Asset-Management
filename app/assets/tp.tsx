"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { authenticator } from "@/lib/authenticator";
import { ImageKitProvider, IKUpload, IKImage } from "imagekitio-next";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface UploadResult {
  filePath?: string;
  [key: string]: any;
}

export const Tp = () => {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGE_KIT_URL_ENDPOINT;
  const publicKey = process.env.NEXT_PUBLIC_IMAGE_KIT_PUBLIC_KEY;

  if (!urlEndpoint || !publicKey) {
    console.error("Missing ImageKit environment variables.");
    return (
      <p className="text-red-500">
        Configuration error. Check environment variables.
      </p>
    );
  }

  const [result, setResult] = useState<UploadResult | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);

  const onError = (err: any) => {
    console.error("Upload Error:", err);
    setUploading(false);
    setProgress(0);
    toast.error("Image upload failed");
  };

  const onSuccess = (res: any) => {
    console.log("Upload Success:", res);
    setResult(res);
    setUploading(false);
    setProgress(0);
    toast.success("Image Uploaded Successfully");
  };

  const onProgress = (progressEvent: any) => {
    // Calculate the upload progress percentage
    const percent = Math.round(
      (progressEvent.loaded / progressEvent.total) * 100,
    );

    console.log("progress", progressEvent);
    console.log("progress-j", percent);
    setProgress(percent);
  };

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      <h2 className="text-lg font-semibold">File Upload</h2>

      {/* Show upload progress UI when uploading */}
      {uploading && (
        <Dialog defaultOpen>
          <DialogContent className="p-6 text-center">
            {/* Dialog Header with Title & Description */}
            <DialogHeader>
              <DialogTitle>Uploading File...</DialogTitle>
              <DialogDescription>
                Please wait while we upload your file. <br />
                <span className="text-red-500 font-medium">
                  ⚠️ Do not refresh this page.
                </span>
              </DialogDescription>
            </DialogHeader>

            {/* Progress Bar */}
            {/* <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden mt-4"> */}
            {/*   <div */}
            {/*     className="absolute h-full bg-blue-500 transition-all" */}
            {/*     style={{ width: `${progress}%` }} */}
            {/*   ></div> */}
            {/* </div> */}

            {/* Progress Percentage Text */}
            <p className="text-sm mt-2">{`${JSON.stringify(progress)}% completed`}</p>

            {/* Cancel Button */}
            <Button
              className="mt-4 flex items-center gap-2"
              onClick={() => setUploading(false)}
            >
              Cancel <X />
            </Button>
          </DialogContent>
        </Dialog>
      )}

      <ImageKitProvider
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
      >
        <IKUpload
          onSuccess={onSuccess}
          onError={onError}
          onProgress={onProgress}
          fileName="my-upload"
          folder="/DAM"
          onUploadStart={() => setUploading(true)}
        />

        {/* Show uploaded image if available */}
        {result?.filePath && (
          <IKImage
            path={result.filePath}
            lqip={{ active: true, quality: 20 }}
            width="400"
            height="400"
            alt="Uploaded Image"
          />
        )}
      </ImageKitProvider>
    </div>
  );
};
