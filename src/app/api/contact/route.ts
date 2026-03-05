import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Contrat de données strict (Best Practice)
const ContactSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  projectType: z.string(),
  budget: z.string(),
  details: z.string().min(10, "Détails insuffisants"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Validation stricte avec safeParse
    const validation = ContactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.flatten().fieldErrors }, 
        { status: 400 }
      );
    }

    const { name, email, projectType, budget, details } = validation.data;

    // 2. Configuration du transporteur SMTP Hostinger
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true pour le port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 3. Envoi de l'email
    await transporter.sendMail({
      from: `"WebAppCI Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Réception sur ton adresse Hostinger
      replyTo: email, // Permet de répondre directement au client
      subject: `🔥 Nouveau Lead : ${projectType} - ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Type de projet :</strong> ${projectType}</p>
          <p><strong>Budget estimé :</strong> ${budget}</p>
          <p><strong>Détails :</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; color: #333;">
            ${details.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Erreur serveur API Contact :", error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l\'envoi du message' }, 
      { status: 500 }
    );
  }
}
