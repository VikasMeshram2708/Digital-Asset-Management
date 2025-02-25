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

export const AddAsset = () => {
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
                          <Input {...field} type="text" />
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
