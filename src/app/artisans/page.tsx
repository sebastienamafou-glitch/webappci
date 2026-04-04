'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ArtisansLanding() {
  const [formState, setFormState] = useState<'idle' | 'success'>('idle');
  const [phone, setPhone] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length > 7) {
      setFormState('success');
      setPhone('');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F5F1] text-[#080F1D] font-sans overflow-x-hidden scroll-smooth">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#080F1D]/95 backdrop-blur-md px-[5%] h-16 flex items-center justify-between border-b border-[#F5782A]/20">
        <div className="font-black text-[22px] tracking-[2px] text-white uppercase">
          PME<span className="text-[#F5782A]">-ARTISANS</span>
        </div>
        <Link 
          href="#contact" 
          className="bg-[#F5782A] hover:bg-[#E85F10] text-white font-semibold text-sm py-2.5 px-5 rounded-md transition-colors"
        >
          Démo gratuite
        </Link>
      </nav>

      {/* HERO */}
      <section className="bg-[#080F1D] min-h-screen flex flex-col justify-center px-[5%] pt-[120px] pb-[80px] relative overflow-hidden">
        <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(245,120,42,0.12)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 bg-[#F5782A]/10 border border-[#F5782A]/30 text-[#F5782A] text-xs font-semibold tracking-[2px] uppercase px-4 py-2 rounded-full mb-8 w-fit">
          <span className="w-1.5 h-1.5 bg-[#F5782A] rounded-full animate-pulse" />
          ARTISANS &amp; PME LOCALES
        </div>

        <h1 className="font-black text-white text-[clamp(52px,8vw,100px)] leading-[0.95] tracking-[1px] max-w-[900px] mb-6 uppercase">
          Votre téléphone<br />
          <span className="text-[#F5782A]">répond tout seul.</span><br />
          Même la nuit.
        </h1>
        
        <p className="text-[#8FA3BF] text-[clamp(16px,2vw,20px)] font-light max-w-[560px] leading-[1.6] mb-12">
          Un client envoie un message pendant que vous êtes sous l&apos;évier. En 30 secondes, il reçoit une réponse, donne ses coordonnées, et fixe un rendez-vous &mdash; sans que vous touchiez votre téléphone.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <Link 
            href="#contact" 
            className="bg-[#F5782A] hover:bg-[#E85F10] text-white font-semibold text-base py-4 px-9 rounded-lg transition-transform hover:-translate-y-[1px]"
          >
            Voir la démo en 15 min &rarr;
          </Link>
          <Link 
            href="#how" 
            className="text-[#D1D8E0] hover:text-white text-sm font-normal flex items-center gap-2 transition-colors"
          >
            <div className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center text-xs">
              ▶
            </div>
            Comment ça marche
          </Link>
        </div>

        <div className="mt-[72px] flex flex-wrap gap-y-8 border-t border-white/5 pt-10">
          {[
            { num: "2", unit: "h", label: "gagnées par jour en moyenne" },
            { num: "30", unit: "s", label: "pour répondre à un client" },
            { num: "5", unit: "j", label: "pour tout mettre en place" },
            { num: "0", unit: "", label: "compétence technique requise" }
          ].map((stat, i) => (
            <div key={i} className="pr-12 md:mr-12 md:border-r border-white/5 last:border-none last:pr-0 last:mr-0">
              <div className="font-black text-[44px] text-white tracking-[1px] leading-none uppercase">
                {stat.num}<span className="text-[#F5782A]">{stat.unit}</span>
              </div>
              <div className="text-[#8A95A3] text-[13px] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PAIN */}
      <section className="bg-white py-[100px] px-[5%]">
        <div className="font-mono text-[11px] tracking-[3px] uppercase text-[#F5782A] mb-4">// Le problème</div>
        <h2 className="font-black text-[clamp(36px,5vw,60px)] text-[#080F1D] leading-none tracking-[1px] mb-6 uppercase">
          Chaque appel manqué,<br />c&apos;est un chantier perdu.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] mt-[60px] bg-[#D1D8E0] rounded-2xl overflow-hidden">
          {[
            { icon: "📞", title: "Vous êtes sur chantier", desc: "Impossible de décrocher quand vous êtes sous un évier ou sur une chaudière. Le client ne laisse pas de message. Il appelle le suivant." },
            { icon: "💸", title: "1 500€ perdus par mois", desc: "3 appels manqués par semaine, à 80€/h de taux journalier moyen; et jusquà 2 500€ de CA qui part chez la concurrence sans que vous le voyiez." },
            { icon: "🌙", title: "Jamais disponible 24/7", desc: "Les urgences chauffage arrivent souvent le soir ou le week-end. Sans réponse rapide, ces clients d'urgence disparaissent en 10 minutes chrono." },
            { icon: "📄", title: "Les devis restent sans réponse", desc: "Vous envoyez un devis, vous attendez. Vous oubliez de relancer. Le client part à la concurrence; parfois pour un devis plus cher que le vôtre." }
          ].map((pain, i) => (
            <div key={i} className="bg-[#F7F5F1] p-10 hover:bg-white transition-colors">
              <div className="w-12 h-12 bg-[#F5782A]/10 rounded-xl flex items-center justify-center text-[22px] mb-5">
                {pain.icon}
              </div>
              <h3 className="font-black text-[24px] tracking-[1px] text-[#080F1D] mb-3 uppercase">{pain.title}</h3>
              <p className="text-[#8A95A3] text-[15px] leading-[1.7]">{pain.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-[#080F1D] py-[100px] px-[5%] relative overflow-hidden">
        <div className="absolute -bottom-[300px] -left-[200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(245,120,42,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="font-mono text-[11px] tracking-[3px] uppercase text-[#F5782A] mb-4">// La solution</div>
        <h2 className="font-black text-[clamp(36px,5vw,60px)] text-white leading-none tracking-[1px] mb-6 uppercase">
          Un assistant qui ne<br />dort jamais.
        </h2>
        <p className="text-[#8FA3BF] text-[18px] font-light max-w-[480px] leading-[1.6] mb-16">
          Configuré une fois, il travaille 24h/24 à votre place. Aucun abonnement complexe. Aucune compétence tech requise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            { num: "01", title: "Réponse automatique", desc: "Dès qu&apos;un client envoie un message WhatsApp ou SMS, il reçoit une réponse personnalisée en moins de 30 secondes, à votre nom." },
            { num: "02", title: "Collecte d&apos;informations", desc: "Le système récupère automatiquement le nom, l&apos;adresse, le type de problème et le numéro du client. Tout arrive dans votre tableau de bord." },
            { num: "03", title: "Prise de rendez-vous", desc: "Votre agenda se remplit automatiquement selon vos disponibilités. Vous arrivez le matin avec des créneaux déjà réservés." },
            { num: "04", title: "Relance des devis", desc: "Votre devis sans réponse après 2 jours ? Le système envoie une relance douce et professionnelle &mdash; automatiquement à J+2 et J+5." },
            { num: "05", title: "Tableau de bord", desc: "Toutes vos demandes clients centralisées dans un tableau simple : nom, besoin, statut. Plus rien ne se perd dans vos SMS." },
            { num: "06", title: "Mis en place en 5 jours", desc: "Je m'occupe de tout : configuration, tests, formation d'1h. Vous n'installez rien, vous ne touchez rien. C'est prêt en une semaine." }
          ].map((feat, i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-9 transition-all hover:bg-white/10 hover:border-[#F5782A]/30 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5782A] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-mono text-[11px] text-[#F5782A] tracking-[2px] mb-5 opacity-70">{feat.num}</div>
              <h3 className="font-black text-[22px] text-white tracking-[1px] mb-3 uppercase">{feat.title}</h3>
              <p className="text-[#7A91A8] text-[14px] leading-[1.7]">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-[#F7F5F1] py-[100px] px-[5%]">
        <div className="font-mono text-[11px] tracking-[3px] uppercase text-[#F5782A] mb-4">// Comment ça marche</div>
        <h2 className="font-black text-[clamp(36px,5vw,60px)] text-[#080F1D] leading-none tracking-[1px] mb-6 uppercase">
          Simple comme un coup de fil.
        </h2>
        
        <div className="flex flex-col md:flex-row mt-16 relative">
          <div className="hidden md:block absolute top-[28px] left-[10%] w-[80%] h-[2px] bg-[repeating-linear-gradient(90deg,var(--orange)_0,var(--orange)_8px,transparent_8px,transparent_20px)] style={{'--orange': '#F5782A'} as React.CSSProperties} z-0" />
          
          {[
            { num: "1", title: "Appel de 15 min", desc: "On discute de votre activité, de vos outils actuels et de ce qui vous prend le plus de temps chaque jour." },
            { num: "2", title: "Je configure tout", desc: "En 5 jours ouvrés, je mets en place le système sur vos canaux existants. Vous n'avez rien à faire." },
            { num: "3", title: "Formation d'1 heure", desc: "Je vous explique comment lire votre tableau de bord et ajuster les réponses automatiques selon votre style." },
            { num: "4", title: "Vous gagnez du temps", desc: "Dès le premier jour, votre téléphone travaille à votre place. Vous vous concentrez sur les chantiers." }
          ].map((step, i) => (
            <div key={i} className="flex-1 text-center px-6 relative z-10 mb-10 md:mb-0">
              <div className="w-14 h-14 bg-[#F5782A] rounded-full flex items-center justify-center font-black text-[24px] text-white mx-auto mb-6 relative">
                {step.num}
                <div className="absolute -inset-1 rounded-full border-2 border-dashed border-[#F5782A]/30" />
              </div>
              <h3 className="font-black text-[20px] tracking-[1px] text-[#080F1D] mb-2.5 uppercase">{step.title}</h3>
              <p className="text-[#8A95A3] text-[14px] leading-[1.6]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MOCKUP DEMO */}
      <section className="bg-[#0F1E36] py-[100px] px-[5%] grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <div className="font-mono text-[11px] tracking-[3px] uppercase text-[#F5782A] mb-4">// En pratique</div>
          <h2 className="font-black text-[clamp(36px,5vw,60px)] text-white leading-none tracking-[1px] mb-6 uppercase">
            Voilà ce que voit votre client.
          </h2>
          <p className="text-[#8FA3BF] text-[16px] leading-[1.7] mb-5">
            Il envoie un message, il reçoit une réponse immédiate et professionnelle &mdash; comme si vous étiez disponible en permanence. De votre côté, tout s&apos;enregistre automatiquement.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Réponse en moins de 30 secondes, 24h/24 7j/7",
              "Message personnalisé à votre nom et votre métier",
              "Le client ne sait pas que c&apos;est automatique",
              "Vous recevez une alerte dès qu&apos;une urgence arrive",
              "Aucun client ne tombe dans le vide"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#8FA3BF] text-[15px] leading-[1.5]">
                <div className="w-[22px] h-[22px] min-w-[22px] bg-[#1CB86A]/15 text-[#1CB86A] rounded-full flex items-center justify-center text-[12px] font-bold">✓</div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="bg-[#1A2640] rounded-[32px] p-6 border border-white/5 max-w-[320px] mx-auto shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
            <div className="bg-[#243452] rounded-2xl py-3 px-4 flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#F5782A] rounded-full flex items-center justify-center text-[14px] font-bold text-white">P</div>
              <div>
                <div className="text-[14px] text-white font-medium">Pascal Plomberie</div>
                <div className="text-[11px] text-[#1CB86A]">● En ligne</div>
              </div>
            </div>
            
            <div className="text-[10px] text-[#8A95A3] mb-2 text-center">22:47</div>
            <div className="bg-[#243452] text-[#D1D8E0] rounded-2xl rounded-bl-sm py-3 px-4 text-[13px] leading-[1.5] mb-2.5 max-w-[90%]">
              Bonsoir, j&apos;ai une fuite sous mon évier, vous pouvez intervenir demain ?
            </div>
            
            <div className="bg-[#1CB86A]/10 border border-[#1CB86A]/20 text-[#1CB86A] text-[11px] font-mono rounded-lg py-2 px-3 my-2 text-center">
              ⚡ Réponse automatique &mdash; 28 secondes
            </div>
            
            <div className="bg-[#F5782A] text-white rounded-2xl rounded-br-sm py-3 px-4 text-[13px] leading-[1.5] mb-2.5 max-w-[90%] ml-auto">
              Bonsoir ! Je vois votre demande pour une fuite. Pour vous proposer un créneau, pouvez-vous m&apos;indiquer votre adresse et si c&apos;est urgent ? Je reviens vers vous au plus vite. 🔧
            </div>
            
            <div className="bg-[#243452] text-[#D1D8E0] rounded-2xl rounded-bl-sm py-3 px-4 text-[13px] leading-[1.5] mb-2.5 max-w-[90%]">
              C&apos;est au 12 rue des Lilas, Strasbourg. Oui assez urgent
            </div>
            
            <div className="bg-[#1CB86A]/10 border border-[#1CB86A]/20 text-[#1CB86A] text-[11px] font-mono rounded-lg py-2 px-3 my-2 text-center">
              📋 Fiche client créée automatiquement
            </div>
            
            <div className="bg-[#F5782A] text-white rounded-2xl rounded-br-sm py-3 px-4 text-[13px] leading-[1.5] mb-2.5 max-w-[90%] ml-auto">
              Parfait ! Je vous propose demain matin à 9h00 &mdash; est-ce que ce créneau vous convient ? ✅
            </div>
            
            <div className="text-[10px] text-[#8A95A3] mt-2 text-center">
              08:03 &mdash; Vous avez récupéré ce client pendant votre sommeil
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-[#F7F5F1] py-[100px] px-[5%] text-center">
        <div className="font-mono text-[11px] tracking-[3px] uppercase text-[#F5782A] mb-4">// Tarifs</div>
        <h2 className="font-black text-[clamp(36px,5vw,60px)] text-[#080F1D] leading-none tracking-[1px] mb-6 uppercase">
          Prix fixe. Aucune surprise.
        </h2>
        <p className="text-[#8A95A3] text-[17px] max-w-[500px] mx-auto mb-16 leading-[1.6]">
          Un investissement unique pour le setup, puis un abonnement optionnel si vous voulez que je maintienne tout pour vous.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto text-left">
          {/* Pack Essentiel */}
          <div className="bg-white border-2 border-transparent rounded-[20px] py-11 px-9 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(8,15,29,0.08)] transition-all">
            <div className="text-[12px] font-semibold tracking-[2px] uppercase text-[#F5782A] mb-3">Pack Essentiel</div>
            <div className="font-black text-[56px] text-[#080F1D] tracking-[1px] leading-none mb-1">400€</div>
            <div className="text-[13px] text-[#8A95A3] mb-8">paiement unique &mdash; livraison en 5 jours</div>
            
            <ul className="mb-9">
              {[
                "Réponse automatique WhatsApp & SMS",
                "Collecte des informations client",
                "Relance automatique des devis",
                "Tableau de bord de suivi",
                "Formation d'utilisation (1h)",
                "30 jours de support inclus"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#080F1D] py-2 border-b border-black/5 last:border-none leading-[1.4]">
                  <span className="text-[#F5782A] font-bold min-w-[16px]">&mdash;</span> {feat}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="block text-center w-full py-3.5 rounded-lg text-[15px] font-semibold border-2 border-[#080F1D] text-[#080F1D] hover:bg-[#080F1D] hover:text-white transition-colors">
              Démarrer &rarr;
            </Link>
          </div>

          {/* Pack Maintenance */}
          <div className="bg-[#080F1D] border-2 border-[#F5782A] rounded-[20px] py-11 px-9 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(8,15,29,0.08)] transition-all relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F5782A] text-white text-[11px] font-semibold tracking-[2px] uppercase py-1.5 px-5 rounded-full whitespace-nowrap">
              ⭐ Le plus choisi
            </div>
            <div className="text-[12px] font-semibold tracking-[2px] uppercase text-[#F5782A] mb-3">Pack + Maintenance</div>
            <div className="font-black text-[56px] text-white tracking-[1px] leading-none mb-1">600€</div>
            <div className="text-[13px] text-[#8FA3BF] mb-8">setup + 250€/mois pour la maintenance</div>
            
            <ul className="mb-9">
              {[
                "Tout le Pack Essentiel",
                "Maintenance et mises à jour mensuelles",
                "Ajout de nouvelles automatisations",
                "Support prioritaire sous 24h",
                "Rapport mensuel de performance",
                "Résiliable à tout moment"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#B8CAE0] py-2 border-b border-white/5 last:border-none leading-[1.4]">
                  <span className="text-[#F5782A] font-bold min-w-[16px]">&mdash;</span> {feat}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="block text-center w-full py-4 rounded-lg text-[15px] font-semibold bg-[#F5782A] text-white hover:bg-[#E85F10] transition-colors border-2 border-[#F5782A]">
              Je veux ça &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-[100px] px-[5%]">
        <div className="font-mono text-[11px] tracking-[3px] uppercase text-[#F5782A] mb-4">// Ils l&apos;utilisent déjà</div>
        <h2 className="font-black text-[clamp(36px,5vw,60px)] text-[#080F1D] leading-none tracking-[1px] mb-6 uppercase">
          Ce que disent les artisans.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {[
            { quote: "J&apos;ai récupéré 3 chantiers la première semaine. Des clients qui m&apos;avaient écrit le soir et que j&apos;aurais normalement jamais rappelés. L&apos;investissement était rentabilisé en 4 jours.", name: "Marc D.", role: "Plombier-Chauffagiste, Strasbourg", initial: "M" },
            { quote: "Je pensais que ce serait compliqué à utiliser. En fait je n&apos;ai rien à faire — le matin j&apos;ouvre mon tableau de bord et j&apos;ai les demandes de la nuit classées. C&apos;est magique.", name: "Thomas R.", role: "Plombier indépendant, Mulhouse", initial: "T" },
            { quote: "La relance automatique des devis c&apos;est ce qui m&apos;a le plus surpris. J&apos;ai signé 2 devis qui trainaient depuis 3 semaines dans les 48h qui ont suivi la mise en place.", name: "Sébastien M.", role: "Chauffagiste, Colmar", initial: "S" }
          ].map((testi, i) => (
            <div key={i} className="bg-[#F7F5F1] border border-[#D1D8E0] rounded-2xl p-8">
              <div className="text-[#F5782A] text-[16px] tracking-[2px] mb-4">★★★★★</div>
              <p className="text-[#080F1D] text-[15px] leading-[1.7] italic mb-6">&quot;{testi.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#080F1D] rounded-full flex items-center justify-center font-black text-[18px] text-[#F5782A] uppercase">
                  {testi.initial}
                </div>
                <div>
                  <div className="font-semibold text-[14px] text-[#080F1D]">{testi.name}</div>
                  <div className="text-[12px] text-[#8A95A3]">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-[#F5782A] py-20 px-[5%] flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
          <div className="text-[64px] leading-none"></div>
          <div>
            <h2 className="font-black text-[clamp(32px,4vw,52px)] text-white tracking-[1px] mb-3 uppercase">Satisfait ou 100% remboursé.</h2>
            <p className="text-white/80 text-[17px] max-w-[480px] leading-[1.6]">
              Si le système ne fonctionne pas conformément à ce qui est décrit, je vous rembourse intégralement dans les 7 jours suivant la livraison. Aucune question posée.
            </p>
          </div>
        </div>
        <Link href="#contact" className="bg-white text-[#F5782A] font-semibold py-4 px-8 rounded-lg shrink-0 hover:bg-white/90 transition-colors">
          Essayer sans risque &rarr;
        </Link>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="bg-[#080F1D] py-[120px] px-[5%] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(245,120,42,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <h2 className="font-black text-[clamp(40px,6vw,80px)] text-white tracking-[1px] leading-[0.95] mb-6 uppercase relative z-10">
          Prêt à ne plus rater<br /><span className="text-[#F5782A]">un seul client ?</span>
        </h2>
        <p className="text-[#8FA3BF] text-[18px] max-w-[480px] mx-auto mb-12 leading-[1.6] relative z-10">
          15 minutes d&apos;appel. Je vous montre exactement ce que je peux mettre en place pour votre activité. Sans engagement.
        </p>
        
        <Link href="tel:+33783974175" className="inline-block bg-[#F5782A] hover:bg-[#E85F10] text-white font-semibold text-[18px] py-5 px-12 rounded-lg transition-colors relative z-10">
          Appeler maintenant &rarr;
        </Link>

        <form 
          onSubmit={handleFormSubmit}
          className="max-w-[480px] mx-auto mt-12 flex bg-white/5 border border-white/10 rounded-xl overflow-hidden relative z-10"
        >
          <input 
            type="tel" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={formState === 'success' ? "On vous rappelle très vite !" : "Votre numéro de téléphone"} 
            required
            className="flex-1 bg-transparent px-5 py-4 text-[15px] text-white outline-none placeholder:text-white/30"
          />
          <button 
            type="submit" 
            className={`px-7 text-[14px] font-semibold whitespace-nowrap transition-colors ${
              formState === 'success' ? 'bg-[#1CB86A] text-white' : 'bg-[#F5782A] hover:bg-[#E85F10] text-white'
            }`}
          >
            {formState === 'success' ? '✓ Envoyé !' : 'Je veux la démo'}
          </button>
        </form>
        
        <p className="text-[#3A5068] text-[13px] mt-5 relative z-10">
          📞 Rappel dans les 2h &middot; Aucun engagement &middot; 15 min chrono
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F1E36] py-8 px-[5%] text-center">
        <p className="text-[#3A4F68] text-[13px]">
          &copy; 2025 &mdash; Automatisation IA pour Artisans
        </p>
        <p className="text-[#3A4F68] text-[13px]">
          Fait pour les Artisans et PME locales. Pas de robots, que des humains derrière. <br className="hidden md:block" />Contactez-moi pour toute question ou besoin d&apos;assistance.
        </p>
      </footer>
    </main>
  );
}
