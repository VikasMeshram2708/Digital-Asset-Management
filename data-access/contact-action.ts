"use server";

import prisma from "@/lib/prisma";
import { contactSchema } from "@/models/contact";
import { ZodError } from "zod";

export const submitContactForm = async (data: contactSchema) => {
  try {
    // Step 1: Validate the input data using the contact schema
    const sanitize = contactSchema.safeParse(data);
    if (!sanitize.success) {
      // Return flattened field-specific errors for better feedback
      return {
        success: false,
        error: {
          message: "Validation failed",
          details: sanitize.error.flatten().fieldErrors,
        },
      };
    }

    const parsedData = sanitize.data;

    // Step 2: Store the sanitized data in the database
    await prisma.contact.create({
      data: {
        name: parsedData.name,
        email: parsedData.email,
        message: parsedData.message,
      },
    });

    // Step 3: Return a success response
    return {
      success: true,
      message: "Contact form successfully submitted",
    };
  } catch (error) {
    // Step 4: Handle errors gracefully
    console.error("[submitContactForm] Error:", error);

    if (error instanceof ZodError) {
      // Zod validation error (shouldn't occur here due to prior check)
      return {
        success: false,
        error: {
          message: "Validation failed",
          details: error.flatten().fieldErrors,
        },
      };
    } else if (error instanceof Error) {
      // General error (e.g., database connection issue)
      return {
        success: false,
        error: {
          message: "An unexpected error occurred",
          details: error.message,
        },
      };
    } else {
      // Fallback for unknown errors
      return {
        success: false,
        error: {
          message: "An unexpected error occurred",
          details: "Unknown error",
        },
      };
    }
  }
};