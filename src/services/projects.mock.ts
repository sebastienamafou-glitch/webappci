import { Project } from "@/lib/schemas/project.schema";

export const projects: Project[] = [
  {
    id: "immofacile-ci",
    title: "ImmoFacile CI",
    description: "L'Immobilier Intelligent. Automatisez l'encaissement des loyers, la génération de contrats et la gestion des incidents locatifs.",
    clientName: "Secteur Immobilier CI",
    category: "SaaS",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PWA", "Node.js"],
    pwaFeatures: ["Consultation hors-ligne", "Installation sur écran d'accueil"],
    metrics: ["Conformité BCEAO", "Sécurité AES-256", "500+ Propriétaires"],
    coverImage: {
      url: "/immofacile.jpg", // À placer à la racine de public/
      alt: "Interface de gestion ImmoFacile",
      blurData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwM4li8Y8AAAAABJRU5ErkJggg==" 
    },
    liveUrl: "https://www.immofacile.ci/",
    isPublished: true,
    createdAt: new Date("2026-02-15"),
  },
  {
    id: "scolia",
    title: "Scolia",
    description: "L'école de demain, aujourd'hui. Simplifiez la gestion scolaire, sécurisez les paiements par Mobile Money et boostez la réussite des élèves.",
    clientName: "Établissements Scolaires",
    category: "SaaS",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    pwaFeatures: ["Suivi en temps réel", "Paiements dématérialisés"],
    metrics: ["Paiements Sécurisés", "Intelligence Artificielle"],
    coverImage: {
      url: "/scolia.jpg", // À placer à la racine de public/
      alt: "Interface de gestion Scolia",
      blurData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwM4li8Y8AAAAABJRU5ErkJggg==" 
    },
    liveUrl: "https://scolia.vercel.app/",
    isPublished: true,
    createdAt: new Date("2026-02-20"),
  },
  {
    id: "agrilien",
    title: "Agri-Lien",
    description: "La Traçabilité Agricole Ivoirienne. Sécuriser les revenus des producteurs, garantir la transparence et assurer la conformité EUDR.",
    clientName: "Coopératives Agricoles",
    category: "SaaS",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
    pwaFeatures: ["Traçabilité hors-ligne", "Scan de codes QR"],
    metrics: ["100% Conforme EUDR", "Initiative Nationale"],
    coverImage: {
      url: "/agrilien.jpg", // À placer à la racine de public/
      alt: "Interface Agri-Lien",
      blurData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwM4li8Y8AAAAABJRU5ErkJggg==" 
    },
    liveUrl: "https://agri-lien.vercel.app/",
    isPublished: true,
    createdAt: new Date("2026-02-25"),
  },
  {
    id: "Kolisyn",
    title: "Kolisyn",
    description: "Une plateforme. Deux solutions. Kolisyn : Simplifiez la logistique, optimisez les itinéraires et réduisez les coûts de transport en Côte d'Ivoire.",
    clientName: "plateforme de logistique",
    category: "SaaS",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
    pwaFeatures: ["Traçabilité hors-ligne", "suivi en temps réel"],
    metrics: ["Satisfaction client", "optimisation des itinéraires"],
    coverImage: {
      url: "/kolisyn.jpg", 
      alt: "Interface Kolisyn",
      blurData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwM4li8Y8AAAAABJRU5ErkJggg=="
    },
    liveUrl: "https://kolisync.vercel.app/",
    isPublished: true,
    createdAt: new Date("2026-02-25"),
  }
];
