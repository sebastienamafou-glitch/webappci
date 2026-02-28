'use client';

import { motion } from 'framer-motion';

export default function HeroText() {
  return (
    <div className="max-w-7xl mx-auto text-center relative z-10">
      {/* Badge avec apparition fluide */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
        PWA Ready - Version 2.0
      </motion.div>
      
      {/* Titre avec effet de glissement */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-heading"
      >
        L'Excellence Web <br />
        {/* Dégradé animé en continu (Ondulation) */}
        <motion.span 
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-500 to-teal-300 bg-[length:200%_auto]"
        >
          Made in CI.
        </motion.span>
      </motion.h1>

      {/* Paragraphe avec fondu */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans mb-12"
      >
        Nous bâtissons des écosystèmes digitaux hautes performances. 
        Découvrez nos réalisations validées par nos schémas de données stricts.
      </motion.p>
    </div>
  );
}
