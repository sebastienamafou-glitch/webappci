'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Cloud, Activity } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="avantage"className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
          L'Avantage <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">Technique.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        
        {/* Grande Carte : Performance (Prend 2 colonnes) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="md:col-span-2 bg-gradient-to-br from-gray-900 to-[#030712] border border-gray-800 rounded-3xl p-8 relative overflow-hidden group hover:border-teal-500/50 transition-colors"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
            <Zap size={120} />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="text-teal-400 font-bold tracking-widest text-sm mb-2 uppercase">Lighthouse Score</div>
              <h3 className="text-4xl font-black text-white mb-2">100 / 100</h3>
            </div>
            <p className="text-gray-400 text-lg max-w-md">Temps de chargement instantanés. Code optimisé pour un First Contentful Paint (FCP) inférieur à 0.8s.</p>
          </div>
        </motion.div>

        {/* Carte Moyenne : Sécurité */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-gray-900 to-[#030712] border border-gray-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 transition-colors"
        >
          <div className="text-indigo-500 mb-6 bg-indigo-500/10 w-fit p-3 rounded-2xl group-hover:scale-110 transition-transform">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Sécurité Bancaire</h3>
          <p className="text-gray-400 text-sm">Chiffrement de bout en bout, authentification JWT et protection anti-DDoS via l'infrastructure Vercel.</p>
        </motion.div>

        {/* Carte Moyenne : Infrastructure */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900 to-[#030712] border border-gray-800 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/50 transition-colors"
        >
          <div className="text-purple-500 mb-6 bg-purple-500/10 w-fit p-3 rounded-2xl group-hover:scale-110 transition-transform">
            <Cloud size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Cloud Scalable</h3>
          <p className="text-gray-400 text-sm">Bases de données distribuées capables de supporter des pics massifs de trafic sans latence.</p>
        </motion.div>

        {/* Grande Carte : Uptime (Prend 2 colonnes) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="md:col-span-2 bg-gradient-to-br from-gray-900 to-[#030712] border border-gray-800 rounded-3xl p-8 flex items-center justify-between group hover:border-blue-500/50 transition-colors"
        >
          <div>
            <div className="text-blue-500 mb-4 bg-blue-500/10 w-fit p-3 rounded-2xl">
              <Activity size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Disponibilité 99.99%</h3>
            <p className="text-gray-400 text-sm max-w-sm">Monitoring en temps réel et bascule automatique en cas de défaillance matérielle (Failover).</p>
          </div>
          {/* Onde animée pour l'effet tech */}
          <div className="hidden md:flex gap-2 items-end h-24">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: ['20%', '100%', '20%'] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1, ease: 'easeInOut' }}
                className="w-3 bg-blue-500/50 rounded-full"
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
