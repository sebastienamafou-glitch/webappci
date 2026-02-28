import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CGU | Web App CI',
  description: 'Conditions Générales d\'Utilisation de Web App CI.',
};

export default function CGU() {
  return (
    <main className="min-h-screen bg-[#030712] pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto text-slate-300 font-sans">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Conditions Générales d'Utilisation
        </h1>
        <p className="text-sm text-brand-400 mb-12">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        
        <div className="space-y-10 leading-relaxed bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2">
              <span className="text-brand-500">1.</span> Mentions Légales
            </h2>
            <p className="mb-4">
              Le présent site web est édité par l'agence <strong>Web App CI</strong>, spécialisée dans l'ingénierie logicielle et le développement d'applications sur-mesure, dont le siège social est situé à Abidjan, Côte d'Ivoire.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li><strong>Contact :</strong> contact@webappci.com</li>
              <li><strong>Hébergement :</strong> Ce site est hébergé de manière sécurisée et décentralisée.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2">
              <span className="text-brand-500">2.</span> Objet du Site
            </h2>
            <p className="text-slate-400">
              Le site a pour objet de présenter les expertises techniques de Web App CI et de permettre aux utilisateurs (entreprises ou porteurs de projets) de formuler des demandes d'estimation via notre formulaire de contact sécurisé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2">
              <span className="text-brand-500">3.</span> Propriété Intellectuelle
            </h2>
            <p className="text-slate-400">
              La structure générale du site, ainsi que les textes, graphiques, images, sons et vidéos la composant, sont la propriété de l'éditeur ou de ses partenaires. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de ce site, par quelque procédé que ce soit, sans l'autorisation préalable et par écrit de Web App CI est strictement interdite et serait susceptible de constituer une contrefaçon.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2">
              <span className="text-brand-500">4.</span> Responsabilité
            </h2>
            <p className="text-slate-400">
              Web App CI s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, l'agence ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. L'utilisation des informations et contenus disponibles sur l'ensemble du site ne saurait en aucun cas engager la responsabilité de Web App CI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2">
              <span className="text-brand-500">5.</span> Droit Applicable et Juridiction
            </h2>
            <p className="text-slate-400">
              Les présentes Conditions Générales d'Utilisation sont régies par la législation ivoirienne. En cas de litige non résolu à l'amiable, les tribunaux compétents d'Abidjan seront seuls saisis pour régler le contentieux.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
