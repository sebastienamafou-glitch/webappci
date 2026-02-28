'use client';

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

// Accélération du Stagger pour réduire le temps de rendu du LCP
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Réduit de 0.15 à 0.05
      delayChildren: 0.1,    // Réduit de 0.2 à 0.1
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  },
} as const;

export default function HeroText() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Correction Hydration : évite le mismatch serveur/client
  if (!isMounted) return <div className="min-h-[350px]" aria-hidden="true" />;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto text-center relative z-10"
    >
      {/* Badge avec contraste optimisé */}
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-[0.2em] mb-10"
      >
        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" aria-hidden="true"></span>
        Ingénierie PWA • Made in CI
      </motion.div>
      
      {/* Titre Principal (LCP) */}
      <motion.h1 
        variants={itemVariants}
        className="text-6xl md:text-8xl font-black mb-8 tracking-tighter font-heading leading-tight text-white"
      >
        Webapp
        <span className="text-teal-400 relative">
          CI
          <motion.span 
            className="absolute -bottom-2 left-0 w-full h-1 bg-teal-500/30 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </span>
      </motion.h1>

      {/* Slogan Dynamique */}
      <motion.div 
        variants={itemVariants}
        className="mb-12"
      >
        <motion.span 
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-500 to-teal-300 bg-[length:200%_auto] block"
        >
          L'Excellence Logicielle.
        </motion.span>
      </motion.div>

      {/* Paragraphe descriptif : Passage en slate-300 pour l'accessibilité */}
      <motion.p 
        variants={itemVariants}
        className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans font-normal"
      >
        Nous transformons vos visions en écosystèmes digitaux hautes performances, 
        propulsés par une architecture rigoureuse et des schémas de données stricts.
      </motion.p>
    </motion.div>
  );
}
