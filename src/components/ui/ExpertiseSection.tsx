import * as LucideIcons from 'lucide-react';
import { expertises } from '@/services/expertise.mock';

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Maîtrise Technique <br />
            <span className="text-brand-500">Sans Compromis</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Nous ne suivons pas les tendances, nous maîtrisons les standards de l'industrie pour garantir rapidité et évolutivité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertises.map((item) => {
            // @ts-ignore - Récupération dynamique de l'icône
            const Icon = LucideIcons[item.iconName];
            
            return (
              <div key={item.id} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/30 transition-all group">
                <div className={`w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.colorClass}`}>
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
