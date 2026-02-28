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
      {/* Section Hero - Priorité au LCP */}
      <section 
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        aria-label="Accueil"
      >
        <HeroText />

        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Colonne Gauche : Image Décorative (On retire priority) */}
          <div 
            className="hidden lg:block lg:col-span-3 relative h-[500px] rounded-2xl overflow-hidden border border-slate-800/50 bg-slate-900/20 shadow-2xl group"
            aria-hidden="true"
          >
            <Image
              src="/backend_data.jpg"
              alt="" 
              fill
              sizes="25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
          </div>

          {/* Colonne Centrale : Animation */}
          <div className="col-span-1 lg:col-span-6" aria-hidden="true">
            <HeroAnimation />
          </div>

          {/* Colonne Droite : Image Décorative (On retire priority) */}
          <div 
            className="hidden lg:block lg:col-span-3 relative h-[500px] rounded-2xl overflow-hidden border border-slate-800/50 bg-slate-900/20 shadow-2xl group"
            aria-hidden="true"
          >
            <Image
              src="/frontend_pwa.jpg"
              alt=""
              fill
              sizes="25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </section>

      {/* Sections d'Expertise et Méthodologie */}
      <ExpertiseSection />
      <ApprocheSection />
      
      {/* Grid de Projets avec Landmark sémantique */}
      <section 
        id="projets" 
        className="max-w-7xl mx-auto px-4 py-32" 
        aria-labelledby="projets-title"
      >
        <div className="flex items-center justify-between mb-12">
          <h2 id="projets-title" className="text-2xl font-bold font-heading text-white">
            Réalisations Signature
          </h2>
          <div className="h-px flex-1 bg-slate-800 ml-8 hidden md:block" aria-hidden="true" />
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
