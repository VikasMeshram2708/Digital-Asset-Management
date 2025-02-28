"use client";

import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/data-access/contact-action";
import { contactSchema } from "@/models/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false); // Loading state for form submission

  // Initialize the form with react-hook-form and Zod resolver
  const form = useForm<contactSchema>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(contactSchema),
  });

  // Handle form submission
  const onSubmit = async (data: contactSchema) => {
    setIsLoading(true); // Enable loading state
    try {
      const res = await submitContactForm(data);
      if (res.success) {
        toast.success(
          "Form submitted successfully. Our team will connect with you shortly."
        );
        form.reset(); // Reset the form after successful submission
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("[ContactForm] Error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false); // Disable loading state
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          aria-labelledby="contact-form-title"
        >
          {/* Title for accessibility */}
          <h2 id="contact-form-title" className="text-lg font-semibold">
            Contact Us
          </h2>

          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="name"
                    placeholder="Enter your name"
                    aria-describedby="name-description"
                  />
                </FormControl>
                <FormDescription id="name-description">
                  Enter your full name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    aria-describedby="email-description"
                  />
                </FormControl>
                <FormDescription id="email-description">
                  Enter your email address
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    id="message"
                    placeholder="Enter your message"
                    aria-describedby="message-description"
                  />
                </FormControl>
                <FormDescription id="message-description">
                  Enter your message (minimum 10 characters)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || !form.formState.isValid}
            aria-disabled={isLoading || !form.formState.isValid}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}