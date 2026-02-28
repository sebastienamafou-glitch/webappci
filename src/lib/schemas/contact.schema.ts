import { z } from "zod";

export const ContactSchema = z.object({
  fullname: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Email invalide"),
  projectType: z.enum(["SaaS", "Mobile App", "Vitrine Premium"]),
  description: z.string().min(10, "Merci de donner un peu plus de détails"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
