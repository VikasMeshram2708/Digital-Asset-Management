"use client";

import React from "react";
import { Button } from "../ui/button";
import { Delete } from "lucide-react";
import { deleteAsset } from "@/data-access/actions";
import { toast } from "sonner";
import prisma from "@/lib/prisma";

type DeleteAssetBtnProps = {
  fileId: string;
};
export default function DeleteAssetBtn(props: DeleteAssetBtnProps) {
  const handleDelete = async () => {
    try {
      await deleteAsset(props.fileId);
      toast.success("Asset deleted");
    } catch (error) {
      console.log(`Error : ${error}`);
      toast.error("Failed to delete");
    }
  };

  return (
    <Button onClick={handleDelete} variant={"destructive"}>
      <Delete />
      Delete
    </Button>
  );
}
