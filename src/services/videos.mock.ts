import { Video } from "@/lib/schemas/video.schema";

export const videos: Video[] = [
  {
    id: "WebappCI-intro",
    title: "Bienvenue sur WebappCI",
    description: "Developpez vos idees",
    url: "/videos/www.webappci.com.mp4", 
    thumbnailUrl: "/webappci-thumb.jpg",
    duration: "0:25",
    category: "MOBILE",
    isFeatured: true,
  },
  {
    id: "demo-immofacile",
    title: "Démonstration : ImmoFacile CI",
    description: "Découvrez comment notre plateforme SaaS automatise la gestion locative en Côte d'Ivoire.",
    url: "/videos/immofacile-demo.mp4", 
    thumbnailUrl: "/immofacile-thumb.jpg",
    duration: "0:08",
    category: "SAAS",
    isFeatured: true,
  }
];
