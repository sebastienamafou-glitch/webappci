'use client';

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactFormData } from "@/lib/schemas/contact.schema";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle');
    try {
      // Appel réseau vers notre route API Resend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.fullname,
          email: data.email,
          projectType: data.projectType,
          details: data.description,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la communication avec le serveur.');
      }

      setSubmitStatus('success');
      reset(); // On vide les champs après succès
      
      // On réinitialise le statut après 5 secondes pour permettre un nouvel envoi
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      console.error("Échec de l'envoi :", error);
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Parlons Business.</h2>
          <p className="text-slate-400 font-sans">Analyse de vos besoins et stratégie claire sous 24h.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Nom complet</label>
              <input 
                {...register("fullname")} 
                disabled={isSubmitting}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-teal-500 outline-none transition-all disabled:opacity-50" 
                placeholder="Sébastien..." 
              />
              {errors.fullname && <p className="text-red-400 text-xs mt-1">{errors.fullname.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Email pro</label>
              <input 
                {...register("email")} 
                disabled={isSubmitting}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-teal-500 outline-none transition-all disabled:opacity-50" 
                placeholder="contact@webappci.com" 
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="space-y-2 relative z-10">
            <label className="text-sm font-medium text-slate-300 ml-1">Type de projet</label>
            <select 
              {...register("projectType")} 
              disabled={isSubmitting}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-teal-500 outline-none transition-all disabled:opacity-50"
            >
              <option value="SaaS">Logiciel SaaS</option>
              <option value="Mobile App">Application Mobile</option>
              <option value="Vitrine Premium">Site Vitrine Premium</option>
            </select>
          </div>

          <div className="space-y-2 relative z-10">
            <label className="text-sm font-medium text-slate-300 ml-1">Détails du projet</label>
            <textarea 
              {...register("description")} 
              disabled={isSubmitting}
              rows={4} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-teal-500 outline-none transition-all disabled:opacity-50" 
              placeholder="Décrivez votre vision..." 
            />
            {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description.message}</p>}
          </div>

          {/* Messages de retour d'état */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center gap-3 text-teal-400 relative z-10">
              <CheckCircle2 size={20} />
              <p className="text-sm font-medium">Demande envoyée avec succès. Nous vous contactons sous 24h.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 relative z-10">
              <AlertCircle size={20} />
              <p className="text-sm font-medium">Une erreur est survenue lors de l'envoi. Veuillez réessayer.</p>
            </div>
          )}

          {/* Bouton de soumission avec état de chargement */}
          <button 
            type="submit" 
            disabled={isSubmitting || submitStatus === 'success'} 
            className="w-full bg-teal-500 hover:bg-teal-400 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-bold py-4 rounded-xl text-lg transition duration-300 flex items-center justify-center gap-2 relative z-10 shadow-lg shadow-teal-500/20 disabled:shadow-none"
          >
            <Send size={20} className={isSubmitting ? "animate-pulse" : ""} />
            {isSubmitting ? "Transmission en cours..." : submitStatus === 'success' ? "Message Envoyé !" : "Demander mon devis gratuit"}
          </button>
        </form>
      </div>
    </section>
  );
}
