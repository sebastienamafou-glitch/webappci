import Image from 'next/image';
import { Cpu, Zap, ShieldCheck, Code2, Network, Terminal, BugOff, Rocket } from 'lucide-react';
import ProjectCard from '@/components/ui/ProjectCard';
import ExpertiseSection from '@/components/ui/ExpertiseSection';
import MultiStepForm from '@/components/contact/MultiStepForm';
import { projects } from '@/services/projects.mock';
import BentoGrid from '@/components/ui/BentoGrid';
import HeroAnimation from '@/components/ui/HeroAnimation';
import HeroText from '@/components/ui/HeroText';
import VideoShowcase from '@/components/ui/VideoShowcase';

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

      {/* BLOC 1 : SECTION RÉASSURANCE TECHNIQUE (Juste sous le Hero Header) */}
      <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#030712]/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* KPI 1 : Architecture */}
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-gray-900 rounded-2xl text-indigo-500 mb-4 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-indigo-500/25">
                <Cpu size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Architecture Cloud</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Infrastructures scalables et flux de déploiement continu (CI/CD).</p>
            </div>

            {/* KPI 2 : Performance */}
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-gray-900 rounded-2xl text-teal-500 mb-4 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-teal-500/25">
                <Zap size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Performance 100%</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Optimisation Lighthouse, Next.js et temps de chargement instantané.</p>
            </div>

            {/* KPI 3 : Sécurité */}
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-gray-900 rounded-2xl text-blue-500 mb-4 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-500/25">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Sécurité & Typage</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Code 100% TypeScript, Prisma ORM et protection des bases de données.</p>
            </div>

            {/* KPI 4 : Sur-mesure */}
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-gray-900 rounded-2xl text-purple-500 mb-4 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-purple-500/25">
                <Code2 size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Code Sur-Mesure</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Zéro template. Solutions SaaS et mobiles développées spécifiquement.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Sections d'Expertise */}
      <ExpertiseSection />

      {/* BLOC 2 : SECTION MÉTHODOLOGIE (Processus d'ingénierie) */}
      <section id="methodologie" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">Méthodologie.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Un processus d'ingénierie rigoureux pour transformer vos concepts en plateformes SaaS et mobiles performantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Ligne de connexion décorative (visible sur desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-500/20 via-teal-500/20 to-transparent -z-10" />

          {/* Étape 1 */}
          <div className="relative group">
            <div className="w-24 h-24 mx-auto bg-[#030712] border border-gray-800 rounded-3xl flex items-center justify-center text-indigo-500 mb-6 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] transition-all duration-500">
              <Network size={40} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-center">
              <div className="text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2">Étape 01</div>
              <h3 className="text-white font-bold text-xl mb-3">Audit & Architecture</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Modélisation UML, conception de la base de données (Prisma/PostgreSQL) et choix de l'infrastructure.</p>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="relative group">
            <div className="w-24 h-24 mx-auto bg-[#030712] border border-gray-800 rounded-3xl flex items-center justify-center text-teal-500 mb-6 group-hover:border-teal-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)] transition-all duration-500">
              <Terminal size={40} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-center">
              <div className="text-teal-500 font-bold text-sm tracking-widest uppercase mb-2">Étape 02</div>
              <h3 className="text-white font-bold text-xl mb-3">Sprints de Dev</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Itérations agiles, code sur-mesure en React/Next.js avec un typage strict pour garantir la stabilité.</p>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="relative group">
            <div className="w-24 h-24 mx-auto bg-[#030712] border border-gray-800 rounded-3xl flex items-center justify-center text-blue-500 mb-6 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-500">
              <BugOff size={40} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-center">
              <div className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-2">Étape 03</div>
              <h3 className="text-white font-bold text-xl mb-3">Tests & QA</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Assurance qualité rigoureuse, audits de sécurité et optimisation absolue des performances.</p>
            </div>
          </div>

          {/* Étape 4 */}
          <div className="relative group">
            <div className="w-24 h-24 mx-auto bg-[#030712] border border-gray-800 rounded-3xl flex items-center justify-center text-purple-500 mb-6 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] transition-all duration-500">
              <Rocket size={40} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-center">
              <div className="text-purple-500 font-bold text-sm tracking-widest uppercase mb-2">Étape 04</div>
              <h3 className="text-white font-bold text-xl mb-3">CI/CD & Déploiement</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Mise en production automatisée sur cloud scalable et monitoring technique en temps réel.</p>
            </div>
          </div>

        </div>
      </section>

      <BentoGrid />

      {/* SECTION VIDÉOS */}
      <VideoShowcase />
      
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
      <section id="contact" className="py-32 px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Démarrer un <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">Projet.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Parlez-nous de vos objectifs. Notre équipe d'ingénieurs vous répond sous 24h.
          </p>
        </div>

        <MultiStepForm />
      </section>
    </main>
  );
}
