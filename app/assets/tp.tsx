"use client";
import { authenticator } from "@/lib/authenticator";

import { ImageKitProvider, IKUpload } from "imagekitio-next";

export const Tp = () => {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGE_KIT_URL_ENDPOINT;
  const publicKey = process.env.NEXT_PUBLIC_IMAGE_KIT_PUBLIC_KEY;

  // const [progress, setProgress] = useState(0);
  // const [uploadedImagePath, setUploadedImagePath] = useState("");
  //
  const onError = (err: any) => {
    console.error("Upload Error:", err);
  };

  const onSuccess = (res: any) => {
    console.log("Upload Success:", res);
    // Save uploaded image path
  };

  // const onProgress = (progressEvent: any) => {
  //   const percent = Math.round(
  //     (progressEvent.loaded / progressEvent.total) * 100,
  //   );
  //   setProgress(percent);
  // };

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      <h2 className="text-lg font-semibold">File Upload</h2>
      <ImageKitProvider
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
      >
        <IKUpload
          onSuccess={onSuccess}
          onError={onError}
          fileName="my-upload"
        />
      </ImageKitProvider>
    </div>
  );
};
