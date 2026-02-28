'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import InstallPWA from '@/components/pwa/InstallPWA';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#030712]/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-slate-800 group-hover:border-teal-500 transition-colors">
              <Image 
                src="/logo_webappci.png" 
                alt="Logo Web App CI"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-white">
              WebApp<span className="text-teal-400">CI</span>
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#expertise" className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">Expertise</Link>
            <Link href="#projets" className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">Projets</Link>
            <Link href="#approche" className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">Notre Approche</Link>
            <Link href="#contact" className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">Contact</Link>
            
            {/* Bouton animé */}
            <Link href="#contact" className="group flex items-center gap-2 px-5 py-2.5 bg-teal-500 text-slate-950 font-bold rounded-full hover:bg-teal-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]">
              <Zap size={16} className="animate-pulse" />
              Estimer mon projet
            </Link>
          </nav>

          {/* Bouton Menu Mobile */}
          <button className="md:hidden text-slate-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#030712] border-b border-slate-800 p-4 space-y-4 shadow-xl">
          <Link href="#expertise" className="block text-slate-300 py-2 hover:text-teal-400" onClick={closeMenu}>Expertise</Link>
          <Link href="#projets" className="block text-slate-300 py-2 hover:text-teal-400" onClick={closeMenu}>Projets</Link>
          <Link href="#approche" className="block text-slate-300 py-2 hover:text-teal-400" onClick={closeMenu}>Notre Approche</Link>
          <Link href="#contact" className="block text-slate-300 py-2 hover:text-teal-400" onClick={closeMenu}>Contact</Link>
          <div className="w-full flex justify-center pt-2 pb-4">
            <InstallPWA />
          </div>
        </div>
      )}
    </header>
  );
}
