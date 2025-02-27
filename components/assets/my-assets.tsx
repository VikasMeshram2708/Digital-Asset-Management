import React, { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { fetchAssets } from "@/data-access/actions";
import AssetImage from "./asset-image";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import DeleteAssetBtn from "./delete-asset-btn";

export default async function MyAssets() {
  // @ts-expect-error let it go dude
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
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.assets.map((asset) => (
            <Card
              key={asset.id}
              className="border-none shadow-none rounded-lg overflow-hidden p-2"
            >
              <CardContent className="p-0">
                <AssetImage mediaUrl={asset.mediaUrl} title={asset.title} />
              </CardContent>
              <CardHeader className="p-0">
                <div className="flex items-center justify-between">
                  <Link href={`/assets/${asset.id}`}>
                    <CardTitle className="capitalize text-lg font-semibold line-clamp-1">
                      {asset.title}
                    </CardTitle>
                    <CardDescription className="capitalize text-sm text-muted-foreground line-clamp-1">
                      {asset.description}
                    </CardDescription>
                  </Link>

                  <DropdownMenu>
                    <DropdownMenuTrigger
                    // className={buttonVariants({ variant: "ghost" })}
                    >
                      <EllipsisVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Action</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>
                        <DeleteAssetBtn fileId={asset.fileId} />
                      </DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
            </Card>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
