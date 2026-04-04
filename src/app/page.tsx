import Image from 'next/image';
import Link from 'next/link';
import { 
  Cpu, Zap, ShieldCheck, Code2, Network, Terminal, BugOff, Rocket, 
  Smartphone, Bot, Database, Globe, Wrench, MessageCircle, ArrowUpRight,
  CheckCircle2, ChevronRight
} from 'lucide-react';
import ProjectCard from '@/components/ui/ProjectCard';
import ExpertiseSection from '@/components/ui/ExpertiseSection';
import MultiStepForm from '@/components/contact/MultiStepForm';
import { projects } from '@/services/projects.mock';
import BentoGrid from '@/components/ui/BentoGrid';
import HeroAnimation from '@/components/ui/HeroAnimation';
import VideoShowcase from '@/components/ui/VideoShowcase';

const WHATSAPP_NUMBER = '33783974175';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_MESSAGE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet%20avec%20Webappci.`;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-teal-500/30 overflow-x-hidden">

      {/* ─── FLOATING WHATSAPP BUTTON ─── */}
      <a
        href={WHATSAPP_MESSAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous contacter sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      >
        {/* Tooltip */}
        <span className="
          opacity-0 group-hover:opacity-100
          translate-x-2 group-hover:translate-x-0
          transition-all duration-300 ease-out
          bg-[#0F1629] border border-white/10 text-white text-sm font-medium
          px-4 py-2 rounded-2xl shadow-2xl whitespace-nowrap
          pointer-events-none
        ">
          Discutons de votre projet 💬
        </span>

        {/* Button */}
        <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/30 group-hover:scale-110 transition-transform duration-300">
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          <span className="absolute inset-[-4px] rounded-full border border-[#25D366]/30 animate-ping animation-delay-300 opacity-10" />
          {/* WhatsApp icon SVG */}
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 relative z-10">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>

      {/* ─── SECTION HERO ─── */}
      <section 
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        aria-label="Accueil Webappci"
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" aria-hidden="true" />

        {/* Glow blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute top-20 left-1/3 w-[300px] h-[300px] bg-teal-600/8 rounded-full blur-3xl" aria-hidden="true" />

        <div className="max-w-7xl mx-auto text-center relative z-10 mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
            <Globe size={13} />
            Déploiement France &amp; International
          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05]">
            Architectes de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-teal-400">
              votre Croissance Numérique.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Webappci conçoit des applications web sur-mesure (PWA) et déploie des 
            infrastructures de Data Automation pour scaler les opérations des entreprises ambitieuses.
          </p>

          {/* Hero CTA group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-900/40 hover:shadow-indigo-900/60 hover:scale-105 transition-all duration-300"
            >
              Démarrer un projet
              <ArrowUpRight size={16} />
            </a>
            <a
              href={WHATSAPP_MESSAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] font-bold text-sm hover:bg-[#25D366]/20 hover:border-[#25D366]/60 hover:scale-105 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Réponse rapide WhatsApp
            </a>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-gray-500">
            {['Réponse sous 24h', 'Devis gratuit', 'Expertise senior'].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-teal-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="hidden lg:block lg:col-span-3 relative h-[500px] rounded-3xl overflow-hidden border border-white/5 bg-white/5 shadow-2xl group" aria-hidden="true">
            <Image
              src="/backend_data.jpg"
              alt="Data Automation et API" 
              fill
              sizes="25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
            {/* Label overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2">
              <Database size={14} className="text-blue-400 shrink-0" />
              <span className="text-xs text-gray-300 font-medium">Data Automation</span>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-6" aria-hidden="true">
            <HeroAnimation />
          </div>

          <div className="hidden lg:block lg:col-span-3 relative h-[500px] rounded-3xl overflow-hidden border border-white/5 bg-white/5 shadow-2xl group" aria-hidden="true">
            <Image
              src="/frontend_pwa.jpg"
              alt="Interface PWA et SaaS"
              fill
              sizes="25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2">
              <Smartphone size={14} className="text-indigo-400 shrink-0" />
              <span className="text-xs text-gray-300 font-medium">PWA & SaaS B2B</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIVISION DES OFFRES ─── */}
      <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Offre 1 : PWA */}
          <div className="relative bg-[#0A0F1E] border border-white/5 rounded-3xl p-8 shadow-2xl group hover:border-indigo-500/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.06),transparent_70%)]" aria-hidden="true" />
            <div className="relative">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                <Smartphone size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-3 tracking-tight">Software Engineering</h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Développement d&apos;applications métier (PWA) et SaaS B2B. Interfaces fluides, mode hors-ligne et performances maximales garanties.
              </p>
              <ul className="space-y-2.5 mb-8 text-xs font-mono uppercase tracking-widest text-gray-500">
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-indigo-500"/> Stack Next.js 14</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-indigo-500"/> Typage Strict</li>
              </ul>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-indigo-400 text-sm font-bold group-hover:gap-3 transition-all">
              Lancer mon projet <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Offre 2 : Data Automation */}
          <div className="relative bg-[#0A0F1E] border border-white/5 rounded-3xl p-8 shadow-2xl group hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.06),transparent_70%)]" aria-hidden="true" />
            <div className="relative">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <Database size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-3 tracking-tight">Data Automation</h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Synchronisation de vos API, CRM et ERP. Nous automatisons vos flux de données complexes pour éliminer les tâches manuelles.
              </p>
              <ul className="space-y-2.5 mb-8 text-xs font-mono uppercase tracking-widest text-gray-500">
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-blue-500"/> Intégration Make / N8N</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-blue-500"/> Architectures Scalables</li>
              </ul>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-blue-400 text-sm font-bold group-hover:gap-3 transition-all">
              Automatiser mes flux <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Offre 3 : Verticale Artisans */}
          <div className="bg-teal-950/20 border border-teal-500/20 rounded-3xl p-8 shadow-2xl group hover:bg-teal-900/20 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Bot size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-teal-500/30 transition-all duration-300">
                <Wrench size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-3 tracking-tight text-teal-50">Verticale Artisans</h2>
              <p className="text-teal-200/70 text-sm mb-6 leading-relaxed">
                Une offre packagée dédiée aux professionnels du bâtiment. Capturez 100% de vos prospects d&apos;urgence via notre bot WhatsApp intelligent.
              </p>
            </div>
            <Link href="/artisans" className="relative z-10 w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-sm font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-teal-900/50 hover:shadow-teal-800/50">
              Découvrir la solution <Rocket size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* ─── RÉASSURANCE TECHNIQUE ─── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Cpu size={32} />, title: "Infrastructures Cloud", desc: "Déploiements mondiaux et scalabilité.", color: "text-indigo-500", glow: "group-hover:shadow-indigo-500/10" },
            { icon: <Zap size={32} />, title: "Vitesse Absolue", desc: "Next.js 14 pour des performances optimales.", color: "text-blue-500", glow: "group-hover:shadow-blue-500/10" },
            { icon: <ShieldCheck size={32} />, title: "Sécurité Typée", desc: "Code 100% TypeScript et protection RGPD.", color: "text-teal-500", glow: "group-hover:shadow-teal-500/10" },
            { icon: <Code2 size={32} />, title: "Sur-Mesure ROIste", desc: "Zéro template. Code bâti pour l'efficacité.", color: "text-purple-500", glow: "group-hover:shadow-purple-500/10" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className={`p-4 bg-white/5 border border-white/10 rounded-2xl mb-4 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 shadow-lg ${item.glow} ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ExpertiseSection />

      {/* ─── MÉTHODOLOGIE ─── */}
      <section id="methodologie" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Méthodologie.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Un processus d&apos;ingénierie rigoureux pour fiabiliser vos déploiements et sécuriser vos données.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-500/20 via-teal-500/20 to-transparent -z-10" />
          
          {[
            { num: "01", icon: <Network size={40} />, title: "Audit & Architecture", desc: "Analyse de vos flux de données et choix de la stack technologique.", color: "text-indigo-500", border: "group-hover:border-indigo-500/50", glow: "group-hover:shadow-indigo-500/10" },
            { num: "02", icon: <Terminal size={40} />, title: "Sprints de Développement", desc: "Livraisons itératives et intégration continue des API.", color: "text-blue-500", border: "group-hover:border-blue-500/50", glow: "group-hover:shadow-blue-500/10" },
            { num: "03", icon: <BugOff size={40} />, title: "Tests & QA", desc: "Validation stricte en environnement de pré-production.", color: "text-teal-500", border: "group-hover:border-teal-500/50", glow: "group-hover:shadow-teal-500/10" },
            { num: "04", icon: <Rocket size={40} />, title: "Déploiement & Scale", desc: "Mise en production sécurisée et monitoring des performances.", color: "text-purple-500", border: "group-hover:border-purple-500/50", glow: "group-hover:shadow-purple-500/10" }
          ].map((step, i) => (
            <div key={i} className="text-center group">
              <div className={`w-24 h-24 mx-auto bg-[#030712] border border-white/10 rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 shadow-xl ${step.color} ${step.border} ${step.glow}`}>
                {step.icon}
              </div>
              <div className={`${step.color} font-bold text-xs uppercase tracking-widest mb-2`}>Étape {step.num}</div>
              <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <BentoGrid />
      <VideoShowcase />
      
      {/* ─── RÉALISATIONS ─── */}
      <section id="projets" className="max-w-7xl mx-auto px-4 py-32 border-t border-white/5">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-black text-white tracking-tight">Réalisations Signature</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-8 hidden md:block" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-32 px-4 relative z-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/15 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Démarrer un <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Projet.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Que ce soit pour une PWA métier ou une infrastructure de données, discutons de votre architecture.
            </p>

            {/* WhatsApp quick contact banner */}
            <div className="mt-8 inline-flex items-center gap-4 bg-[#0A1A12] border border-[#25D366]/20 rounded-2xl px-6 py-4 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-xs mb-0.5">Préférez un échange direct ?</p>
                <a
                  href={WHATSAPP_MESSAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-bold text-sm hover:underline"
                >
                  Écrire sur WhatsApp → +33 7 83 97 41 75
                </a>
              </div>
              <span className="ml-2 px-2 py-1 bg-[#25D366]/10 text-[#25D366] text-xs font-bold rounded-lg border border-[#25D366]/20">
                Réponse rapide
              </span>
            </div>
          </div>

          <MultiStepForm />
        </div>
      </section>
    </main>
  );
}
