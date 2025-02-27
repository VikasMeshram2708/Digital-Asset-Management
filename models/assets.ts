import * as z from "zod";

// const ALLOWED_IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "webp"];
// const ALLOWED_VIDEO_EXTENSIONS = ["mp4", "mov", "avi", "mkv"];
// const MAX_IMAGE_SIZE_MB = 20; // 20MB
// const MAX_VIDEO_SIZE_MB = 100; // 100MB

// // Helper function to validate file extension
// function validateFileExtension(
//   file: File,
//   allowedExtensions: string[]
// ): boolean {
//   const fileExtension = file.name.split(".").pop()?.toLowerCase();
//   return fileExtension ? allowedExtensions.includes(fileExtension) : false;
// }

// // Helper function to validate file size
// function validateFileSize(file: File, maxSizeMB: number): boolean {
//   const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to bytes
//   return file.size <= maxSizeBytes;
// }

// export const mediaSchema = z.object({
//   mediaFile: z
//     .instanceof(File) // Ensure the input is a File object
//     .superRefine((file, ctx) => {
//       // Validate file type
//       if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           message: `File must be an image (${ALLOWED_IMAGE_EXTENSIONS.join(
//             ", "
//           )}) or video (${ALLOWED_VIDEO_EXTENSIONS.join(", ")}).`,
//         });
//         return;
//       }

//       // Validate file extension
//       const allowedExtensions = file.type.startsWith("image/")
//         ? ALLOWED_IMAGE_EXTENSIONS
//         : ALLOWED_VIDEO_EXTENSIONS;
//       if (!validateFileExtension(file, allowedExtensions)) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           message: `File extension is not allowed. Allowed extensions are: ${allowedExtensions.join(
//             ", "
//           )}.`,
//         });
//       }

//       // Validate file size
//       const maxSizeMB = file.type.startsWith("image/")
//         ? MAX_IMAGE_SIZE_MB
//         : MAX_VIDEO_SIZE_MB;
//       if (!validateFileSize(file, maxSizeMB)) {
//         ctx.addIssue({
//           code: z.ZodIssueCode.custom,
//           message: `File size exceeds the limit. Maximum size is ${maxSizeMB}MB.`,
//         });
//       }
//     }),
// });

const mediaTypeEnum = z.enum(["IMAGE", "VIDEO"]);

export const createAssetSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "Title is required.",
    })
    .max(100, {
      message: "Title must be at most 100 characters.",
    }),
  description: z
    .string()
    .min(1, {
      message: "Description must be at least 1 characters.",
    })
    .max(500, {
      message: "Description must be at most 500 characters.",
    }),
  mediaFile: z.instanceof(File),
});

export type createAssetSchema = z.infer<typeof createAssetSchema>;

export const deleteAssetSchema = z.object({
  fileId: z.string(),
});

export type deleteAssetSchema = z.infer<typeof deleteAssetSchema>;
