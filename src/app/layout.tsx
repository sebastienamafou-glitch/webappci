import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; // Ajout du Footer
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit" 
});

export const viewport: Viewport = {
  themeColor: "#14b8a6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Web App CI | Agence de Développement Premium",
  description: "Expertise en SaaS, Applications Mobiles et écosystèmes digitaux hautes performances en Côte d'Ivoire.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    apple: "/icon-192.png",
  },
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
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer /> {/* Footer intégré ici */}
      </body>
    </html>
  );
}
