import React from "react";
import { AddAsset } from "./add-asset";
import MediaUpload from "./media-upload";
// import { Tp } from "./tp";

const AssetsPage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto py-2 px-6">
        <h2>Assets Page</h2>
        <AddAsset />
        {/* <MediaUpload /> */}
      </div>
    </div>
  );
};

export default AssetsPage;
