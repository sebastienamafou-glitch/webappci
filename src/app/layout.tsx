import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Optimisation : display: 'swap' pour améliorer le FCP/LCP
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#14b8a6",
  width: "device-width",
  initialScale: 1,
  // Correction Accessibilité : Autoriser le zoom utilisateur pour le score 100
  userScalable: true, 
};

export const metadata: Metadata = {
  title: {
    default: 'WebAppCI | Agence Web & Développement SaaS à Abidjan',
    template: '%s | WebAppCI',
  },
  description: 'Expertise premium en développement SaaS, applications mobiles et plateformes sur mesure en Côte d\'Ivoire.',
  keywords: ['Agence Web Abidjan', 'Développement SaaS Côte d\'Ivoire', 'Création application mobile', 'WebAppCI', 'Développement web sur mesure'],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    apple: "/icon-192.png",
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.webappci.com',
    title: 'WebAppCI | L\'excellence digitale à Abidjan',
    description: 'Transformez votre vision en réalité avec notre agence de développement premium en Côte d\'Ivoire.',
    siteName: 'WebAppCI',
    images: [
      {
        url: '/logo_webappci.png',
        width: 1200,
        height: 630,
        alt: 'WebAppCI - Agence de Développement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebAppCI | Agence Web & Développement SaaS',
    description: 'Expertise premium en développement SaaS et applications mobiles.',
    images: ['/logo_webappci.png'],
  },
  metadataBase: new URL('https://www.webappci.com'),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "WebAppCI",
  "url": "https://www.webappci.com",
  "logo": "https://www.webappci.com/logo_webappci.png",
  "image": "https://www.webappci.com/logo_webappci.png",
  "description": "Expertise premium en développement SaaS, applications mobiles et plateformes sur mesure en Côte d'Ivoire.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Abidjan",
    "addressCountry": "CI"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@webappci.com",
    "contactType": "customer service"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans bg-[#030712] text-white antialiased flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
