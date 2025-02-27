import ShareBtn from "@/components/assets/share-btn";
import SingleAssetImage from "@/components/assets/single-asset-image";
import { Card, CardContent } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React from "react";

type SingleAssetProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SingleAsset(params: SingleAssetProps) {
  const asset = await params.params;
  const assetData = await prisma.asset.findUnique({
    where: {
      id: String(asset.id),
    },
  });

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-6">
        <SingleAssetBreadCrump
          assetId={asset.id as string}
          assetTitle={assetData?.title as string}
        />
        <Card className="border-none shadow-none rounded-lg overflow-hidden py-10">
          {/* Responsive Content Layout */}
          <CardContent className="flex flex-col sm:flex-row gap-6">
            {/* Image Section */}
            <div className="w-full sm:w-1/2">
              <SingleAssetImage
                mediaUrl={assetData?.mediaUrl as string}
                title={assetData?.title as string}
              />
            </div>

            {/* Article Section */}
            <article className="w-full sm:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold capitalize">
                {assetData?.title}
              </h2>
              <p className="text-gray-700">{assetData?.description}</p>
              <p className="text-sm text-gray-500">
                Created On :{" "}
                {assetData &&
                  new Date(assetData?.createdAt).toLocaleDateString()}
              </p>

              {/* Share Button */}
              <div className="flex items-center gap-2">
                <ShareBtn mediaUrl={assetData?.mediaUrl as string} />
              </div>
            </article>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

type SingleAssetBreadCrumpProps = {
  assetId: string;
  assetTitle: string;
};
const SingleAssetBreadCrump = (props: SingleAssetBreadCrumpProps) => {
  const { assetId, assetTitle } = props;
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="capitalize" href={`/assets/${assetId}`}>
            {assetTitle}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
