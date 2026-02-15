import { z } from "zod";

export const leadUtmSchema = z
  .object({
    source: z.string().max(120).optional(),
    medium: z.string().max(120).optional(),
    campaign: z.string().max(160).optional(),
    term: z.string().max(160).optional(),
    content: z.string().max(160).optional(),
  })
  .optional();

export const leadRequestSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z
    .string()
    .trim()
    .min(8)
    .max(40)
    .regex(/^[0-9+()\-\s]+$/),
  service: z.string().trim().min(2).max(120),
  message: z.string().trim().max(2000).optional().default(""),
  sourcePage: z.string().trim().min(1).max(255),
  consent: z.literal(true),
  utm: leadUtmSchema,
  companyWebsite: z.string().max(0).optional().default(""),
});

export type LeadRequestInput = z.infer<typeof leadRequestSchema>;
