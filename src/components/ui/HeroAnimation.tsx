'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, Smartphone, Zap, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 'data',
    icon: Database,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/20',
    title: 'Schéma de Données Strict',
    code: `const PWA = z.object({
  speed: z.literal('blazing'),
  offline: z.boolean().true(),
  secure: z.string().url()
});`,
    label: 'Validation Zod...'
  },
  {
    id: 'build',
    icon: Server,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    title: 'Build & Optimisation',
    code: `✓ Compiling Next.js 16...
✓ Generating Service Worker...
✓ Optimizing LCP & CLS...
Done in 850ms.`,
    label: 'Compilation Next.js...'
  },
  {
    id: 'deploy',
    icon: Smartphone,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    title: 'PWA Live & Installable',
    code: null,
    label: 'Déploiement Edge...'
  }
];

export default function HeroAnimation() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000); 
    
    return () => clearInterval(timer);
  }, []);

  // Empêche le rendu côté serveur pour éviter le conflit avec Framer Motion
  if (!isMounted) {
    return <div className="max-w-2xl mx-auto mt-12 min-h-[400px]"></div>;
  }

  const step = steps[currentStep];
  const Icon = step.icon;

  return (
    <div className="relative max-w-2xl mx-auto mt-12 perspective-1000">
      <motion.div
        animate={{
          background: `conic-gradient(from 90deg at 50% 50%, ${step.id === 'data' ? '#2dd4bf' : step.id === 'build' ? '#60a5fa' : '#c084fc'}, transparent 50%)`
        }}
        transition={{ duration: 1 }}
        className="absolute inset-0 blur-[100px] opacity-40 -z-10 rounded-full"
      />

      <div className="relative rounded-2xl border border-slate-800 bg-[#0d1117]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        
        <div className="flex h-1.5 bg-slate-900">
          {steps.map((s, index) => (
            <motion.div
              key={s.id}
              initial={{ width: '0%' }}
              animate={{ width: index <= currentStep ? '100%' : '0%' }}
              transition={{ duration: index === currentStep ? 4 : 0.5, ease: "linear" }}
              className={`h-full flex-1 ${index <= currentStep ? s.bgColor.replace('/20', '') : 'bg-transparent'}`}
            />
          ))}
        </div>

        <div className="p-8 min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode='wait'>
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${step.bgColor}`}>
                  <Icon size={28} className={step.color} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">{step.title}</h3>
                  <p className="text-slate-400 text-sm flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap size={14} className={step.color} />
                    </motion.span>
                    {step.label}
                  </p>
                </div>
              </div>

              {step.code ? (
                <div className="font-mono text-sm bg-slate-950/50 p-4 rounded-lg border border-slate-800/50 text-slate-300 overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{step.code}</pre>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-xl border border-slate-800 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="relative z-10 flex flex-col items-center"
                  >
                    <CheckCircle2 size={48} className="text-teal-400 mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">WebAppCI PWA</h4>
                    <p className="text-sm text-slate-400 mb-4">Installable • Hors-ligne • Rapide</p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-slate-950 font-bold rounded-full text-sm shadow-lg shadow-teal-500/20">
                      <Smartphone size={16} />
                      Ajouter à l'écran d'accueil
                    </button>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
