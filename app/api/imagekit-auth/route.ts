import {NextResponse } from "next/server";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGE_KIT_PUBLIC_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGE_KIT_URL_ENDPOINT!,
  privateKey: process.env.NEXT_PUBLIC_IMAGE_KIT_PRIVATE_KEY!,
});

export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}
