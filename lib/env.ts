import * as z from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().min(2, {
    message: "Database url is required",
  }),
  AUTH_SECRET: z.string().min(1, { message: "Auth secret is required" }),
  AUTH_GOOGLE_ID: z.string().min(1, {
    message: "Google client id is missing",
  }),
  AUTH_GOOGLE_SECRET: z.string().min(1, {
    message: "Google secret is missing",
  }),
  IMAGE_KIT_PUBLIC_KEY: z.string().min(1, {
    message: "Image kit public key missing",
  }),
  IMAGE_KIT_URL_ENDPOINT: z.string().min(1, {
    message: "Image kit url endpoint is missing",
  }),
  IMAGE_KIT_PRIVATE_KEY: z.string().min(1, {
    message: "Image kit private key is missing",
  }),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.log("Environment variables are missing");
  process.exit(1);
}

export const env = parsedEnv.data;
