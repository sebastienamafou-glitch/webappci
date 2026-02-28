import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialisation de Resend (la clé sera dans ton .env)
const resend = new Resend(process.env.RESEND_API_KEY);

// Contrat de données strict correspondant à ton formulaire
const ContactSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  projectType: z.string(),
  details: z.string().min(10, "Détails insuffisants"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Validation stricte avec safeParse (Best Practice)
    const validation = ContactSchema.safeParse(body);

    // Si la validation échoue, on renvoie les erreurs formatées proprement
    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.flatten().fieldErrors }, 
        { status: 400 }
      );
    }

    // 2. Si succès, on récupère les données typées
    const validatedData = validation.data;

    // 3. Envoi de l'email via Resend
    const data = await resend.emails.send({
      from: 'WebAppCI <onboarding@resend.dev>', // À changer avec ton domaine en prod
      to: ['contact@webappci.com'], // Ton adresse de réception
      subject: `🔥 Nouveau Lead Premium : ${validatedData.projectType} - ${validatedData.name}`,
      text: `
        Nom: ${validatedData.name}
        Email: ${validatedData.email}
        Type de Projet: ${validatedData.projectType}
        
        Détails:
        ${validatedData.details}
      `,
    });

    // 4. Réponse succès
    return NextResponse.json({ success: true, data });

  } catch (error) {
    // Ce catch ne gère désormais que les vraies erreurs serveur (ex: Resend down, body malformé)
    console.error("Erreur serveur API Contact :", error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
