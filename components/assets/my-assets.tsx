import React, { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { fetchAssets } from "@/data-access/actions";
import AssetImage from "./asset-image";

export default async function MyAssets() {
  // @ts-ignore
  const res: AssetsResponse = await fetchAssets();
  const data = res.meta;

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">No assets found.</p>
      </div>
    );
  }

  return (
    <div className="">
      <Suspense
        fallback={
          <h2 className="text-center text-muted-foreground">Processing...</h2>
        }
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.assets.map((asset) => (
            <Card
              key={asset.id}
              className="border-none shadow-none rounded-lg overflow-hidden"
            >
              <CardHeader className="p-0">
                <CardTitle className="capitalize text-lg font-semibold">
                  {asset.title}
                </CardTitle>
                <CardDescription className="capitalize text-sm text-muted-foreground">
                  {asset.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <AssetImage mediaUrl={asset.mediaUrl} title={asset.title} />
              </CardContent>
              <CardFooter className="p-0 text-sm text-gray-600">
                <p>
                  Uploaded on:{" "}
                  {asset.createdAt &&
                    new Date(asset.createdAt).toLocaleDateString("en-In")}
                </p>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
