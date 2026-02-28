import { Expertise } from "@/lib/schemas/expertise.schema";

export const expertises: Expertise[] = [
  {
    id: "frontend",
    title: "Frontend Moderne",
    description: "Interfaces réactives et ultra-fluides pour une expérience utilisateur native.",
    iconName: "Layout",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    colorClass: "text-brand-400",
  },
  {
    id: "backend",
    title: "Backend & API",
    description: "Architectures scalables et sécurisées pour gérer vos données critiques.",
    iconName: "Server",
    skills: ["Node.js", "PostgreSQL", "Prisma", "Python"],
    colorClass: "text-blue-400",
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    description: "Déploiement continu et infrastructure haute disponibilité.",
    iconName: "Cloud",
    skills: ["AWS", "Docker", "CI/CD", "Vercel"],
    colorClass: "text-purple-400",
  }
];
