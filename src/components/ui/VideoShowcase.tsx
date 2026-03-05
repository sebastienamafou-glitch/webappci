'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import Image from 'next/image';
import { videos } from '@/services/videos.mock';
import { Video } from '@/lib/schemas/video.schema';

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  // On ne prend que les vidéos mises en avant
  const featuredVideos = videos.filter(v => v.isFeatured);

  if (featuredVideos.length === 0) return null;

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight mb-2">
            Démos en <span className="text-teal-400">Action.</span>
          </h2>
          <p className="text-gray-400">Découvrez l'expérience utilisateur de nos plateformes.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredVideos.map((video) => (
          <motion.div
            key={video.id}
            whileHover="hover"
            onClick={() => setActiveVideo(video)} // <-- CORRECTION ICI
            className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer border border-gray-800 hover:border-teal-500/50 transition-colors shadow-2xl bg-gray-900"
          >
            {/* Image de couverture (fallback sur un fond noir si pas d'image) */}
            {video.thumbnailUrl ? (
              <Image 
                src={video.thumbnailUrl} 
                alt={video.title} 
                fill 
                className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950" />
            )}

            {/* Bouton Play Animé */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                variants={{ hover: { scale: 1.1, boxShadow: "0 0 30px rgba(20,184,166,0.5)" } }}
                className="w-20 h-20 bg-teal-500/90 rounded-full flex items-center justify-center text-slate-950 pl-2 backdrop-blur-md"
              >
                <Play size={36} fill="currentColor" />
              </motion.div>
            </div>

            {/* Infos de la vidéo */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gray-800/80 backdrop-blur border border-gray-700 rounded-full text-xs font-bold text-teal-400 tracking-wider">
                  {video.category}
                </span>
                {video.duration && <span className="text-gray-300 text-sm font-medium">{video.duration}</span>}
              </div>
              <h3 className="text-xl font-bold text-white">{video.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Immersif plein écran */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)} // 1. Fermeture au clic à l'extérieur
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]/95 backdrop-blur-xl p-4 md:p-12"
          >
            {/* Bouton X renforcé pour le mobile */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full transition-colors z-[110] backdrop-blur-md"
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Évite la fermeture si on clique pour mettre pause
              className="w-full max-w-5xl h-[85vh] md:h-[80vh] bg-black rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center"
            >
              {activeVideo.url.includes('youtube') || activeVideo.url.includes('vimeo') ? (
                <iframe src={activeVideo.url} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen />
              ) : (
                <video 
                  src={activeVideo.url} 
                  controls 
                  autoPlay
                  loop={false} // <-- CORRECTION ICI
                  className="w-full h-full object-contain" 
                  onEnded={() => setActiveVideo(null)} // 2. Fermeture automatique à la fin
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
