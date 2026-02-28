import { z } from "zod";

export const TechStackSchema = z.enum([
  "Next.js", 
  "React", 
  "Tailwind CSS", 
  "Node.js", 
  "PostgreSQL", 
  "AWS", 
  "Docker", 
  "PWA", 
  "TypeScript"
]);

export const ProjectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(3),
  description: z.string().min(10),
  clientName: z.string(),
  category: z.enum(["SaaS", "Mobile App", "Vitrine Premium"]),
  stack: z.array(TechStackSchema),
  pwaFeatures: z.array(z.string()).optional(),
  metrics: z.array(z.string()).optional(),
  
  coverImage: z.object({
    url: z.string(), // Accepte les chemins relatifs comme "/immofacile.jpg"
    alt: z.string(),
    blurData: z.string().optional(),
  }),
  
  // Nouveau champ pour le lien du projet
  liveUrl: z.string().url("Doit être une URL valide").optional(),
  
  isPublished: z.boolean().default(false),
  createdAt: z.date(),
});

export type Project = z.infer<typeof ProjectSchema>;
