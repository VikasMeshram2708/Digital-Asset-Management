"use client";

import React from "react";
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
  FormDescription,
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

export const AddAsset = () => {
  const urlEndpoint = env.IMAGE_KIT_URL_ENDPOINT;
  const publicKey = env.IMAGE_KIT_PUBLIC_KEY;
  const form = useForm<createAssetSchema>({
    resolver: zodResolver(createAssetSchema),
    defaultValues: {
      title: "",
      description: "",
      mediaUrl: "",
    },
  });

  const onSubmit = (data: createAssetSchema) => {
    console.log("data", data);
  };

  const onError = () => {
    console.log("Error");
  };

  const onSuccess = () => {
    console.log("Success");
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger className={buttonVariants({ variant: "default" })}>
          Add Asset
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription asChild>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Asset Title</FormLabel>
                        <FormControl>
                          <Input {...field} type="text" />
                        </FormControl>
                        <FormDescription>
                          Add title to your asset
                        </FormDescription>
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
                          <Input {...field} type="text" />
                        </FormControl>
                        <FormDescription>
                          Add description to your asset
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="mediaUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload Assset</FormLabel>
                        <FormControl>
                          <ImageKitProvider
                            publicKey={publicKey}
                            urlEndpoint={urlEndpoint}
                            authenticator={authenticator}
                          >
                            <div>
                              <h2>File upload</h2>
                              <IKUpload
                                fileName="test-upload.png"
                                onError={onError}
                                onSuccess={onSuccess}
                              />
                            </div>
                          </ImageKitProvider>{" "}
                        </FormControl>
                        <FormDescription>Upload your media </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button className="w-full" type="submit">
                    Add
                  </Button>
                </form>
              </Form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
