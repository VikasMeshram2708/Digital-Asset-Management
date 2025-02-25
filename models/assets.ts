import * as z from "zod";

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
  mediaUrl: z.string().url({
    message: "Invalid URL format.",
  }),
});

export type createAssetSchema = z.infer<typeof createAssetSchema>;
