import * as z from 'zod';

/**
 * Schema for validating contact form data.
 * Ensures that the input adheres to strict validation rules.
 */
export const contactSchema = z.object({
  // Name: Must be a non-empty string
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }).min(1, { message: 'Name cannot be empty' }),

  // Email: Must be a valid email address
  email: z.string({
    required_error: 'Email is required',
    invalid_type_error: 'Email must be a string',
  }).email({ message: 'Invalid email format' }),

  // Message: Must be a non-empty string with a minimum length of 10 characters
  message: z.string({
    required_error: 'Message is required',
    invalid_type_error: 'Message must be a string',
  }).min(10, { message: 'Message must be at least 10 characters long' }),
});

// Export the inferred TypeScript type for consistent usage
export type contactSchema = z.infer<typeof contactSchema>;