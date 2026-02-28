import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Confidentialité | Web App CI',
  description: 'Politique de confidentialité et de gestion des données personnelles.',
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-[#030712] pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto text-slate-300 font-sans">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          Politique de Confidentialité
        </h1>
        <p className="text-sm text-brand-400 mb-12">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        
        <div className="space-y-10 leading-relaxed bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2">
              <span className="text-brand-500">1.</span> Engagement de Web App CI
            </h2>
            <p className="text-slate-400">
              Dans le cadre de son activité d'ingénierie logicielle, Web App CI accorde une importance absolue à la sécurité et à la confidentialité des données de ses clients et prospects. La présente politique détaille notre approche de la collecte des données, en conformité avec la Loi n° 2013-450 de la Côte d'Ivoire relative à la protection des données à caractère personnel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2">
              <span className="text-brand-500">2.</span> Données Collectées
            </h2>
            <p className="mb-4 text-slate-400">
              Nous collectons uniquement les données strictement nécessaires à l'établissement d'une proposition commerciale via notre formulaire de contact validé cryptographiquement :
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li><strong>Informations d'identité :</strong> Nom complet.</li>
              <li><strong>Contact :</strong> Adresse email professionnelle.</li>
              <li><strong>Projet :</strong> Type de projet (SaaS, Mobile, Vitrine) et description des besoins.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2">
              <span className="text-brand-500">3.</span> Utilisation et Finalité
            </h2>
            <p className="text-slate-400">
              Les données transmises sont utilisées exclusivement pour l'analyse de vos besoins techniques et la rédaction de devis sur-mesure. <strong>Web App CI ne vend, ne loue, ni ne cède aucune de vos données à des tiers à des fins commerciales.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2">
              <span className="text-brand-500">4.</span> Sécurité et Stockage
            </h2>
            <p className="text-slate-400">
              Notre architecture Progressive Web App (PWA) garantit que les échanges de données entre votre navigateur et nos serveurs sont chiffrés (protocole HTTPS). Les données sont stockées sur des serveurs sécurisés bénéficiant de standards de sécurité élevés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2">
              <span className="text-brand-500">5.</span> Vos Droits
            </h2>
            <p className="text-slate-400">
              Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos données personnelles. Pour exercer ces droits, vous pouvez formuler une demande explicite à l'adresse suivante : <strong>contact@webappci.com</strong>. Nous nous engageons à traiter votre demande dans un délai maximal de 30 jours.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
