import Image from 'next/image';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '@/lib/schemas/project.schema';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Détermine dynamiquement si le conteneur doit être un lien <a> ou une simple <div>
  const ImageWrapper = project.liveUrl ? 'a' : 'div';
  const wrapperProps = project.liveUrl 
    ? { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer", 'aria-label': `Visiter ${project.title}` } 
    : {};

  return (
    <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 flex flex-col h-full">
      
      {/* Conteneur Image 100% Cliquable */}
      <ImageWrapper 
        {...wrapperProps}
        className="relative h-64 w-full overflow-hidden bg-slate-950 block cursor-pointer"
      >
        <Image
          src={project.coverImage.url}
          alt={project.coverImage.alt}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          placeholder={project.coverImage.blurData ? "blur" : "empty"}
          blurDataURL={project.coverImage.blurData}
        />
        
        {/* Overlay assombri et indicateur visuel (le faux bouton) */}
        <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          {project.liveUrl && (
            <span className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-slate-950 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl shadow-teal-500/20">
              <ExternalLink size={18} />
              Accéder au projet
            </span>
          )}
        </div>
      </ImageWrapper>

      {/* Contenu */}
      <div className="p-6 space-y-4 flex flex-col flex-grow relative z-20 bg-slate-900/50">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
          </div>
          {/* L'icône reste également cliquable */}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visiter ${project.title}`}>
              <ExternalLink className="w-5 h-5 text-slate-500 hover:text-teal-400 transition-colors cursor-pointer" />
            </a>
          ) : (
            <ExternalLink className="w-5 h-5 text-slate-500" />
          )}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 flex-grow">
          {project.description}
        </p>

        {/* Stack Technique */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-[10px] font-mono bg-slate-800 text-slate-300 rounded border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Métriques / PWA Features */}
        <div className="pt-4 border-t border-slate-800">
          <ul className="grid grid-cols-1 gap-2">
            {project.metrics?.slice(0, 2).map((metric, index) => (
              <li key={index} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3 h-3 text-teal-500" />
                {metric}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
