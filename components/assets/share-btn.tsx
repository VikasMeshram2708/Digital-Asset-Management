"use client";

import React from "react";
import { Button } from "../ui/button";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

type ShareBtnProps = {
  mediaUrl: string;
};
export default function ShareBtn(props: ShareBtnProps) {
  const copyLink = () => {
    const link = window.navigator.clipboard.writeText(props.mediaUrl);
    toast.success("Link copied");
  };
  return (
    <Button variant={"link"} onClick={copyLink}>
      Share
      <Share2 />
    </Button>
  );
}
