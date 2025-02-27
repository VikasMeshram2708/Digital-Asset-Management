// import { authenticator } from "@/lib/authenticator";
// import { NextRequest } from "next/server";

// export const POST = async (req: NextRequest) => {
//   try {
//     const formData = await req.json();
//     console.log('incd', formData)

//     const publicKey = process.env.NEXT_PUBLIC_IMAGE_KIT_PUBLIC_KEY;
//     const privateKey = process.env.NEXT_PUBLIC_IMAGE_KIT_PRIVATE_KEY;

//     const url = "https://upload.imagekit.io/api/v1/files/upload";
//     const options = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         Authorization: `Basic ${privateKey}`,
//       },
//       body: JSON.stringify(formData),
//     };

//     const { expire, signature, token } = await authenticator();

//     const response = await fetch(url, options);
//     const data = await response.json();
//     console.log(data);
//     return Response.json({
//       message: "Asset uploaded successfully",
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);
//     return Response.json({
//       success: false,
//       error: "Something went wrong. Failed to upload the asset",
//     });
//   }
// };
