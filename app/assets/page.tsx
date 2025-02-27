import React from "react";
import { AddAsset } from "./add-asset";
import MyAssets from "@/components/assets/my-assets";

const AssetsPage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto py-2 px-6">
        <div className="py-10">
          <AddAsset />
        </div>
        <MyAssets />
      </div>
    </div>
  );
};

export default AssetsPage;
