import { ShieldCheck, Zap, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: "step-1",
    number: "01",
    title: "Architecture & Schémas",
    description: "Tout commence par la data. Nous définissons des contrats de données stricts (Zod) pour garantir une fondation applicative robuste et sans régression.",
    icon: ShieldCheck,
  },
  {
    id: "step-2",
    number: "02",
    title: "UI/UX & Performance",
    description: "Design system sur-mesure optimisé pour le LCP (Largest Contentful Paint). Chaque interface est pensée pour la conversion et l'accessibilité.",
    icon: Zap,
  },
  {
    id: "step-3",
    number: "03",
    title: "Développement & CI/CD",
    description: "Intégration et déploiement continus. Le code est testé, typé fortement et déployé sur des environnements de pré-production à chaque itération.",
    icon: Code2,
  },
  {
    id: "step-4",
    number: "04",
    title: "Déploiement PWA",
    description: "Votre plateforme passe en production. Elle devient installable (Progressive Web App), rapide comme l'éclair, et accessible même hors-ligne.",
    icon: Rocket,
  }
];

export default function ApprocheSection() {
  return (
    <section 
      id="approche" 
      className="py-24 px-4 bg-[#030712] relative overflow-hidden"
      aria-labelledby="approche-title"
    >
      {/* Effet visuel de fond - Gradient Teal */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" 
        aria-hidden="true" 
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="approche-title" className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Notre Méthodologie
          </h2>
          <p className="text-slate-300 font-sans max-w-2xl mx-auto text-lg">
            Une ingénierie logicielle de pointe pour transformer votre vision en un produit digital irréprochable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Ligne connectrice décorative */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-slate-800 -z-10" aria-hidden="true" />

          {steps.map((step) => (
            <article key={step.id} className="relative group">
              <div className="flex flex-col items-center text-center">
                {/* Icône & Numéro */}
                <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center mb-6 relative group-hover:border-teal-500 transition-colors z-10 shadow-xl shadow-teal-500/5">
                  <span className="absolute -top-3 -right-3 text-sm font-bold font-mono text-teal-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                    {step.number}
                  </span>
                  <step.icon 
                    className="w-8 h-8 text-slate-300 group-hover:text-teal-400 transition-colors" 
                    aria-hidden="true" 
                  />
                </div>

                {/* Contenu */}
                <h3 className="text-xl font-bold text-white mb-3 font-heading">{step.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
