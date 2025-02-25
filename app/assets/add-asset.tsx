"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { createAssetSchema } from "@/models/assets";
import { zodResolver } from "@hookform/resolvers/zod";
import { env } from "@/lib/env";
import { ImageKitProvider, IKUpload } from "imagekitio-next";
import { authenticator } from "@/lib/authenticator";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { toast } from "sonner";

export const AddAsset = () => {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGE_KIT_URL_ENDPOINT;
  const publicKey = process.env.NEXT_PUBLIC_IMAGE_KIT_PUBLIC_KEY;

  // State to manage uploaded files
  const [mediaFile, setMediaFile] = useState<File | null>(null);

  // Initialize form with react-hook-form and Zod validation
  const form = useForm<createAssetSchema>({
    resolver: zodResolver(createAssetSchema),
    defaultValues: {
      title: "",
      description: "",
      mediaUrl: "",
    },
  });

  // Handle file input change
  const handleMediaChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];

      // 1. Validate if a file was selected
      if (!file) {
        console.warn("No file selected.");
        toast.warning("Please select a file.");
        return;
      }

      // 2. Validate file type (optional: restrict to specific types)
      const allowedTypes = ["image/jpeg", "image/png", "video/mp4"]; // Example allowed types
      if (!allowedTypes.includes(file.type)) {
        console.warn(`Unsupported file type: ${file.type}`);
        toast.error(
          "Unsupported file type. Please upload a valid image or video.",
        );
        return;
      }

      // 3. Convert file size to megabytes (MB)
      const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to MB

      // 4. Log the file size for debugging
      console.log(
        "Selected file:",
        file.name,
        `Size: ${fileSizeInMB.toFixed(2)} MB`,
      );

      // 5. Validate file size (maximum 20 MB)
      const MAX_FILE_SIZE_MB = 20;
      if (fileSizeInMB > MAX_FILE_SIZE_MB) {
        console.warn(`File too large: ${fileSizeInMB.toFixed(2)} MB`);
        toast.error(
          `Media file is too big. Maximum allowed size is ${MAX_FILE_SIZE_MB} MB.`,
        );
        return; // Exit early if the file is too large
      }

      // 6. Update state with the selected file
      setMediaFile(file);

      // 7. Generate a preview URL for the file (optional)
      const previewUrl = URL.createObjectURL(file);
      console.log("Preview URL generated:", previewUrl);

      // 8. Success feedback
      toast.success("File selected successfully.");
    } catch (error) {
      // 9. Handle unexpected errors gracefully
      console.error("Error during file selection:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  // Reset state when the dialog closes
  const resetState = () => {
    form.reset(); // Reset form fields
    setMediaFile(null); // Clear the image file
  };

  // Handle form submission
  const onSubmit = (data: createAssetSchema) => {
    console.log("Form Data:", data);
    // You can handle the upload logic here using `imageFile` or `videoFile`
  };

  return (
    <div>
      <Dialog onOpenChange={(open) => !open && resetState()}>
        <DialogTrigger className={buttonVariants({ variant: "default" })}>
          Add Asset
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-bold text-center">
              Fill Your Assets Details
            </DialogTitle>
            <DialogDescription asChild>
              <Form {...form}>
                <form
                  className="space-y-4"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  {/* Title Field */}
                  <FormField
                    name="title"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Asset Title</FormLabel>
                        <FormControl>
                          <Input {...field} type="text" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Description Field */}
                  <FormField
                    name="description"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Asset Description</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Media Upload Field */}
                  <FormField
                    name="mediaUrl"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload Asset</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept="image/*, video/*"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e); // Update form state
                              handleMediaChange(e); // Handle file selection
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button className="w-full" type="submit">
                    Add
                  </Button>

                  {/* Media Preview */}
                  {mediaFile && (
                    <article>
                      <h2 className="text-lg font-semibold">Media Preview</h2>
                      {mediaFile.type === "image/**" ? (
                        <Image
                          src={URL.createObjectURL(mediaFile)}
                          alt={mediaFile.name}
                          width={250}
                          height={250}
                          className="object-cover rounded-md"
                        />
                      ) : (
                        <video
                          src={URL.createObjectURL(mediaFile)}
                          muted
                          loop
                          controls
                          className="rounded bg-cover"
                        ></video>
                      )}
                      <h3 className="mt-2">Name: {mediaFile.name}</h3>
                      <p>Media Type: {mediaFile.type}</p>
                      <p>
                        Size: {(mediaFile.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </article>
                  )}
                </form>
              </Form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
