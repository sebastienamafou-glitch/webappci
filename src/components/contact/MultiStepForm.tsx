'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Monitor, Globe, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

type ProjectType = 'MOBILE' | 'SAAS' | 'WEB' | '';
type BudgetRange = 'SMALL' | 'MEDIUM' | 'LARGE' | '';

interface FormData {
  projectType: ProjectType;
  budget: BudgetRange;
  name: string;
  email: string;
  details: string;
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    budget: '',
    name: '',
    email: '',
    details: ''
  });

  const updateForm = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erreur lors de l'envoi");
      
      setIsSuccess(true);
    } catch (error) {
      console.error("Erreur d'envoi du formulaire :", error);
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gray-900/50 backdrop-blur-xl border border-teal-500/30 p-12 rounded-[2.5rem] text-center max-w-2xl mx-auto shadow-2xl shadow-teal-500/10">
        <CheckCircle2 size={64} className="text-teal-400 mx-auto mb-6" />
        <h3 className="text-3xl font-black text-white mb-4">Demande envoyée !</h3>
        <p className="text-gray-400 text-lg">Notre équipe technique analyse votre besoin et vous recontacte sous 24h.</p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#030712]/80 backdrop-blur-xl border border-gray-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
      {/* Barre de progression */}
      <div className="flex gap-2 mb-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${step >= i ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'bg-gray-800'}`} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* ÉTAPE 1 : Type de projet */}
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <h3 className="text-2xl font-black text-white">Quel est votre besoin ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button onClick={() => { updateForm('projectType', 'SAAS'); nextStep(); }} className={`p-6 rounded-2xl border text-center transition-all ${formData.projectType === 'SAAS' ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400' : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-600'}`}>
                <Monitor className="mx-auto mb-3" size={32} />
                <span className="font-bold text-sm">Plateforme SaaS</span>
              </button>
              <button onClick={() => { updateForm('projectType', 'MOBILE'); nextStep(); }} className={`p-6 rounded-2xl border text-center transition-all ${formData.projectType === 'MOBILE' ? 'bg-teal-500/10 border-teal-500 text-teal-400' : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-600'}`}>
                <Smartphone className="mx-auto mb-3" size={32} />
                <span className="font-bold text-sm">App Mobile</span>
              </button>
              <button onClick={() => { updateForm('projectType', 'WEB'); nextStep(); }} className={`p-6 rounded-2xl border text-center transition-all ${formData.projectType === 'WEB' ? 'bg-blue-500/10 border-blue-500 text-blue-400' : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-600'}`}>
                <Globe className="mx-auto mb-3" size={32} />
                <span className="font-bold text-sm">Site Web Premium</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* ÉTAPE 2 : Budget */}
        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <h3 className="text-2xl font-black text-white">Quel est votre budget estimé ?</h3>
            <div className="space-y-3">
              {[
                { id: 'SMALL', label: 'Moins de 2 000 000 FCFA' },
                { id: 'MEDIUM', label: 'De 2M à 5 000 000 FCFA' },
                { id: 'LARGE', label: 'Plus de 5 000 000 FCFA' },
              ].map((b) => (
                <button key={b.id} onClick={() => { updateForm('budget', b.id); nextStep(); }} className={`w-full p-4 rounded-xl border text-left transition-all ${formData.budget === b.id ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400' : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-600'}`}>
                  <span className="font-bold text-sm">{b.label}</span>
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="text-gray-500 text-sm font-bold flex items-center gap-2 mt-6 hover:text-white transition-colors">
              <ArrowLeft size={16} /> Retour
            </button>
          </motion.div>
        )}

        {/* ÉTAPE 3 : Contact & Détails */}
        {step === 3 && (
          <motion.form key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-2xl font-black text-white mb-6">Parlons de votre projet.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required type="text" placeholder="Votre nom" className="w-full p-4 bg-gray-900 border border-gray-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all placeholder:text-gray-600" value={formData.name} onChange={e => updateForm('name', e.target.value)} />
              <input required type="email" placeholder="Adresse email" className="w-full p-4 bg-gray-900 border border-gray-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all placeholder:text-gray-600" value={formData.email} onChange={e => updateForm('email', e.target.value)} />
            </div>
            <textarea required placeholder="Décrivez brièvement votre besoin..." rows={4} className="w-full p-4 bg-gray-900 border border-gray-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all placeholder:text-gray-600 resize-none" value={formData.details} onChange={e => updateForm('details', e.target.value)} />
            
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
              <button type="button" onClick={prevStep} className="text-gray-500 text-sm font-bold flex items-center gap-2 hover:text-white transition-colors">
                <ArrowLeft size={16} /> Retour
              </button>
              <button type="submit" disabled={isSubmitting} className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-bold rounded-xl flex items-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all disabled:opacity-50">
                {isSubmitting ? 'Envoi...' : 'Démarrer le projet'} <Send size={18} />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
