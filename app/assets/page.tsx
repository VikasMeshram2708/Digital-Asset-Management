import React from "react";
import { AddAsset } from "./add-asset";
import MyAssets from "@/components/assets/my-assets";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const AssetsPage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto py-2 px-6">
        <div className="py-5">
          <AssetsPageBreadCrumps />
        </div>
        <AddAsset />
        <div className="py-5">
          {/* <section className="flex items-center justify-between">
            <h2>Your Assets</h2>
            <div className="flex items-center gap-3">
              <Button>Prev</Button>
              <Button variant={"outline"}>Next</Button>
            </div>
          </section> */}
          <MyAssets />
        </div>
      </div>
    </div>
  );
};

export default AssetsPage;

const AssetsPageBreadCrumps = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/assets">Assets</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
