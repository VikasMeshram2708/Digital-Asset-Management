"use server";
import { auth } from "@/auth";
import { authenticator } from "@/lib/authenticator";
import prisma from "@/lib/prisma";
import { createAssetSchema, deleteAssetSchema } from "@/models/assets";
import ImageKit from "imagekit";
import { revalidatePath } from "next/cache";

// upload asset
export const uploadAsset = async (data: FormData) => {
  try {
    // Extract environment variables
    const publicKey = process.env.NEXT_PUBLIC_IMAGE_KIT_PUBLIC_KEY;
    const privateKey = process.env.NEXT_PUBLIC_IMAGE_KIT_PRIVATE_KEY;

    // session
    const session = await auth();

    if (!publicKey || !privateKey) {
      throw new Error("ImageKit credentials are missing.");
    }
    // console.log("incd", data);
    // Validate the incoming data using Zod schema
    const validatedData = createAssetSchema.parse(data);

    const { title, description, mediaFile } = validatedData;
    // console.log("indc", { title, description, mediaFile });

    // Ensure the file is provided
    if (!(mediaFile instanceof File)) {
      throw new Error("No valid file provided for upload.");
    }

    // Authenticate with ImageKit
    const { expire, signature, token } = await authenticator();

    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append("file", mediaFile); // Append the actual file
    formData.append("fileName", title || "untitled_asset");
    formData.append("folder", "/DAM");
    formData.append("publicKey", publicKey);
    formData.append("signature", signature);
    formData.append("expire", expire);
    formData.append("token", token);
    // console.log("fd", formData);

    // Define the ImageKit upload URL and options
    const url = "https://upload.imagekit.io/api/v1/files/upload";
    const options = {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(privateKey).toString("base64")}`,
      },
      body: formData,
    };

    // Perform the upload request
    const response = await fetch(url, options);

    // Handle non-200 responses
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`ImageKit upload failed: ${errorData.message}`);
    }

    // Parse the successful response
    const responseData: UploadResult = await response.json();
    // console.log("Upload successful:", responseData);

    // Save asset metadata to the database
    await prisma.asset.create({
      data: {
        title,
        description,
        mediaType: responseData.fileType,
        mediaUrl: responseData.url,
        fileId: responseData.fileId,
        user: {
          connect: {
            email: String(session?.user?.email),
          },
        },
      },
    });
    revalidatePath("/assets");
    return {
      success: true,
      message: "Asset uploaded successfully",
    };
  } catch (error) {
    console.error("Something went wrong. Failed to upload the media:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

// fetch assets
export const fetchAssets = async () => {
  const session = await auth();

  if (!session?.user) {
    return {
      success: false,
      error: "Login required",
    };
  }

  try {
    const assets = await prisma.asset.findMany({
      where: {
        user: {
          email: String(session.user.email),
        },
      },
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
    });
    const totalAssets = await prisma.asset.count({
      where: {
        user: {
          email: String(session.user.email),
        },
      },
    });
    return {
      success: true,
      meta: {
        assets: assets,
        totalAsset: totalAssets,
      },
    };
  } catch (error) {
    console.error("Something went wrong. Failed to upload the media:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

// Delete assets
export const deleteAsset = async (data: string) => {
  const session = await auth();
  if (!session?.user) {
    return {
      success: false,
      error: "Login required",
    };
  }

  // Extract environment variables
  const publicKey = process.env.NEXT_PUBLIC_IMAGE_KIT_PUBLIC_KEY ?? "";
  const privateKey = process.env.NEXT_PUBLIC_IMAGE_KIT_PRIVATE_KEY ?? "";
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGE_KIT_URL_ENDPOINT ?? "";

  const imageKit = new ImageKit({
    privateKey,
    publicKey,
    urlEndpoint,
  });

  // console.log("incd", data);

  try {
    // console.log("santd", sanitizeData);
    await Promise.all([
      imageKit.deleteFile(data),
      prisma.asset.delete({
        where: {
          fileId: String(data),
          user: {
            email: String(session.user.email),
          },
        },
      }),
    ]);

    revalidatePath("/assets");

    return {
      success: true,
      message: "Media asset deleted",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
};
