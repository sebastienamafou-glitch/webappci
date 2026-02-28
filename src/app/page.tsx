import Image from 'next/image';
import ProjectCard from '@/components/ui/ProjectCard';
import ExpertiseSection from '@/components/ui/ExpertiseSection';
import ContactForm from '@/components/ui/ContactForm';
import { projects } from '@/services/projects.mock';
import ApprocheSection from '@/components/ui/ApprocheSection';
import HeroAnimation from '@/components/ui/HeroAnimation';
import HeroText from '@/components/ui/HeroText';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Section Hero - Identité WebAppCI */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        
        {/* Composant Texte Animé (reste au centre au-dessus) */}
        <HeroText />

        {/* Grille 3 colonnes pour l'animation centrale entourée des images */}
        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Colonne Gauche : Image Backend / Data */}
          <div className="hidden lg:block lg:col-span-3 relative h-[500px] rounded-2xl overflow-hidden border border-slate-800/50 shadow-2xl group">
            <Image
              src="/backend_data.jpg" // Remplace par le nom exact de ton fichier
              alt="Architecture Backend et Flux de Données"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Colonne Centrale : L'Animation Hero (prend plus de place) */}
          <div className="col-span-1 lg:col-span-6">
            <HeroAnimation />
          </div>

          {/* Colonne Droite : Image Frontend / PWA */}
          <div className="hidden lg:block lg:col-span-3 relative h-[500px] rounded-2xl overflow-hidden border border-slate-800/50 shadow-2xl group">
            <Image
              src="/frontend_pwa.jpg" // Remplace par le nom exact de ton fichier
              alt="Expérience Utilisateur Frontend et PWA"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60"></div>
          </div>
          
        </div>
      </section>

      {/* Section Expertise */}
      <ExpertiseSection />
      
      {/* Section Approche */}
      <ApprocheSection />
      
      {/* Grid de Projets */}
      <section id="projets" className="max-w-7xl mx-auto px-4 py-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold font-heading">Réalisations Signature</h2>
          <div className="h-px flex-1 bg-slate-800 ml-8 hidden md:block"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      {/* Section Contact */}
      <ContactForm />
    </main>
  );
}
