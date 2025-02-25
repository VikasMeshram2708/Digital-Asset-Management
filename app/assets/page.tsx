import React from "react";
import { AddAsset } from "./add-asset";
// import { Tp } from "./tp";

const AssetsPage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto py-2 px-6">
        <h2>Assets Page</h2>
        <AddAsset />
      </div>
    </div>
  );
};

export default AssetsPage;
