import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2 space-y-4">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
                <Image src="/logo_webappci.png" alt="Logo Webappci" width={50} height={50} className="object-contain group-hover:scale-105 transition duration-300 shrink-0" />
                <div className="flex flex-col">
                    <span className="self-center text-lg font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-teal-300">
                        WEBAPPCI<span className="text-teal-400">.COM</span>
                    </span>
                    <span className="text-[9px] text-slate-500 font-bold tracking-[0.2em] uppercase flex items-center gap-1">
                        <ShieldCheck className="w-2 h-2 text-teal-500" /> Architectes de votre Croissance Numérique
                    </span>
                </div>
            </Link>
            
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mt-4">
              Nous bâtissons des écosystèmes digitaux hautes performances et des PWA sur-mesure pour propulser votre croissance.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 font-heading">Navigation</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <Link href="#expertise" className="hover:text-brand-400 transition-colors">Expertise</Link>
              <Link href="#projets" className="hover:text-brand-400 transition-colors">Projets Signature</Link>
              <Link href="#methodologie" className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">Méthodologie</Link>
              <Link href="#contact" className="hover:text-brand-400 transition-colors">Estimation Gratuite</Link>
              <Link href="#avantage" className="hover:text-brand-400 transition-colors">Avantage Tech</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-heading">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <a href="mailto:contact@webappci.com" className="hover:text-brand-400 transition-colors">contact@webappci.com</a>
              <p>France, International</p>
              <p className="text-xs mt-2 inline-block px-2 py-1 border border-brand-500/30 text-brand-400 rounded bg-brand-500/10">
                Disponibilité : Ouvert aux projets
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Web App CI. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/cgu" className="hover:text-white transition-colors">CGU</Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
