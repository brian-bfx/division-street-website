import { z } from "zod";
import { businessTypes, planOptions } from "@/content/forms";

const businessTypeEnum = z.enum([
  businessTypes[0],
  ...businessTypes.slice(1),
]);

const planEnum = z.enum([planOptions[0], ...planOptions.slice(1)]);

export const signupSchema = z.object({
  businessName: z.string().min(1, "Business name is required").max(200),
  contactName: z.string().min(1, "Contact name is required").max(200),
  email: z.string().email("Please enter a valid email address").max(254),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(30)
    .regex(/^[\d\s()+\-.]+$/, "Please enter a valid phone number"),
  businessType: businessTypeEnum,
  plan: planEnum,
  message: z.string().max(2000).optional().or(z.literal("")),
  website: z.string().max(0).optional().default(""),
});

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Please enter a valid email address").max(254),
  message: z
    .string()
    .min(1, "Message is required")
    .max(5000, "Message is too long"),
  website: z.string().max(0).optional().default(""),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
