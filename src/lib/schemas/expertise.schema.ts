import { z } from "zod";

export const ExpertiseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  iconName: z.string(), // Nom de l'icône Lucide
  skills: z.array(z.string()),
  colorClass: z.string(), // Pour varier les couleurs (ex: text-blue-400)
});

export type Expertise = z.infer<typeof ExpertiseSchema>;
