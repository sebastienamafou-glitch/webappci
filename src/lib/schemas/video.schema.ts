import { z } from "zod";

export const VideoSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  url: z.string().url("URL de la vidéo invalide"), // Ex: lien YouTube, Vimeo ou chemin local /videos/demo.mp4
  thumbnailUrl: z.string().optional(), // Image de couverture avant la lecture
  duration: z.string().optional(), // Ex: "1:45"
  category: z.enum(["SAAS", "MOBILE", "WEB", "TUTORIEL"]),
  isFeatured: z.boolean().default(false), // Pour mettre une vidéo en avant sur la page d'accueil
});

export type Video = z.infer<typeof VideoSchema>;
