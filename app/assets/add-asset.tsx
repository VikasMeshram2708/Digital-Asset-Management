"use client";
import React, { useRef } from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { createAssetSchema } from "@/models/assets"; // Ensure this is a Zod schema
import { uploadAsset } from "@/data-access/actions";

export const AddAsset = () => {
  const form = useForm<createAssetSchema>({
    defaultValues: {
      title: "",
      description: "",
      mediaFile: undefined,
    },
    resolver: zodResolver(createAssetSchema), // Correct usage of zodResolver
  });

  const [isUploading, setIsUploading] = React.useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dialogTriggerRef = useRef<HTMLButtonElement | null>(null);

  const resetState = () => {
    form.reset(); // Reset form fields
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
    }
  };

  const onSubmit = async (data: createAssetSchema) => {
    try {
      setIsUploading(true); // Set uploading state
      // console.log("Form Data:", data);
      // @ts-expect-error expect the formdata error
      const res = await uploadAsset(data);
      if (res.success) {
        toast.success("Asset added successfully!");
        resetState();
        dialogTriggerRef.current?.click();
      } else {
        toast.error("Something went wrong. Failed to add asset.");
      }
    } catch (error) {
      console.error("Error uploading asset:", error);
      toast.error("Failed to add asset.");
    } finally {
      setIsUploading(false); // Reset uploading state
    }
  };

  return (
    <div>
      <Dialog onOpenChange={(open) => !open && resetState()}>
        <DialogTrigger
          ref={dialogTriggerRef}
          className={buttonVariants({ variant: "default" })}
        >
          Add Asset
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-bold text-center">
              Fill Your Asset Details
            </DialogTitle>
            <DialogDescription className="text-center">
              Please fill in the details below to add a new asset.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asset Title</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" aria-label="Asset Title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asset Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={4}
                        aria-label="Asset Description"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="mediaFile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Asset</FormLabel>
                    <FormControl>
                      <Input
                        ref={fileInputRef}
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          field.onChange(file); // Manually update form state
                        }}
                        aria-label="Upload Asset"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full"
                type="submit"
                disabled={isUploading}
                aria-label="Submit Asset"
              >
                {isUploading ? "Uploading..." : "Add Asset"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
