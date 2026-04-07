import { request } from 'node:http';
import nodemailer from 'nodemailer'
/**
 * transporteur d'email
 */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_EMY,
    pass: process.env.EMAIL_PASS
  }
});

export const sendMail=async(request,response)=>{
      const details = request.body;
  
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_EMY,
      to: details.email,
      subject: 'No reply',
      html: `
        <h1>Bonjour ${details.user_name}!</h1>
        <p>Ceci est un message automatisé, merci de ne pas y répondre.</p>
        <button style="color:red;"><a href="emy.ca">clique ici</a></button>
      `
    });
    return response.status(201).json({ success: true });
  } catch (error) {
    return response.status(403).json({ error: error.message });
  }
}
export async function sendWelcomeEmail(email, username) {
  const htmlContent = `
  <!DOCTYPE html>
  <html>
    <body style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
      <div style="max-width:600px; margin:auto; background:white; padding:30px; border-radius:12px;">
        
        <h1 style="color:#2c3e50; text-align:center;">🏌️ Bienvenue sur EMY</h1>

        <p>Salut <strong>${username}</strong>,</p>

        <p>
          Ton compte a été créé avec succès sur <strong>EMY</strong> 🎉
        </p>

        <p>
          Tu peux maintenant :
        </p>

        <ul>
          <li>🏆 Participer à des tournois de golf</li>
          <li>👥 Rejoindre ou créer une équipe</li>
          <li>🏘️ Intégrer des communautés</li>
          <li>🏅 Gagner des prix sponsorisés</li>
        </ul>

        <div style="text-align:center; margin:25px 0;">
          <a href="http://localhost:3000/login"
             style="background:#27ae60; color:white; padding:12px 20px; text-decoration:none; border-radius:8px; font-weight:bold;">
            Accéder à mon compte
          </a>
        </div>

        <p>
          Si tu n’es pas à l’origine de cette inscription, tu peux ignorer cet email.
        </p>

        <hr style="margin:30px 0;" />

        <p style="font-size:12px; color:#888; text-align:center;">
          EMY — Plateforme de gestion de tournois de golf<br/>
          Collège La Cité • 2026
        </p>

      </div>
    </body>
  </html>
  `;

  await transporter.sendMail({
    from: `"Emy" <${process.env.EMAIL_EMY}>`,
    to: email,
    subject: "Bienvenue sur Emy ",
    html: htmlContent,
  });
}
export async function joinTournamentMail(username, tourName) {
  const htmlContent= `
    <h2>🏆 Inscription confirmée</h2>
    <p>${username}, tu es inscrit au tournoi :</p>
    <strong>${tourName}</strong>
  `;
    await transporter.sendMail({
    from: `"Emy" <${process.env.EMAIL_EMY}>`,
    to: email,
    subject: "Inscription au tournoi ",
    html: htmlContent,
  });
}
export async function addedSponsorMail(username) {
  const htmlContent= `
    <h2> Vous êtes commandiitaire</h2>
    <p><strong>${username}</strong>, vous êtes désormais inscrit comme commanditaire sur la plateforme.</p>
    <p>C'est un honneur pour nous de vous avoir comme membre de la grande communauté de commanditaires sur Emy.</p>
    <p>Vous pouvez dès maintenant sponsorisé un tournoi et obtenir des bénéfices (si inclus).</p>
    
  `;
    await transporter.sendMail({
    from: `"Emy" <${process.env.EMAIL_EMY}>`,
    to: email,
    subject: "Inscription au tournoi ",
    html: htmlContent,
  });
}
export async function verifyEmail(user_name,code,email) {
  const htmlContent= `
  <!DOCTYPE html>
  <html>
    <body style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
      <div style="max-width:600px; margin:auto; background:white; padding:30px; border-radius:12px;">
        
        <h2>Confirme ton email</h2>
        <p>Salut ${user_name},</p>
        <p>Votre code est : <strong>${code}</strong><p>

        <p>
          Si tu n’es pas à l’origine de cette inscription, tu peux ignorer cet email.
        </p>

        <hr style="margin:30px 0;" />

        <p style="font-size:12px; color:#888; text-align:center;">
          EMY — Plateforme de gestion de tournois de golf<br/>
          Collège La Cité • 2026
        </p>

      </div>
    </body>
  </html>
  `;

    await transporter.sendMail({
    from: `"Emy" <${process.env.EMAIL_EMY}>`,
    to: email,
    subject: "Validation d'email ",
    html: htmlContent,
  });
}
export const sendCodeValidation= async(request,response)=>{
  const payload=request.body
  try{
    if(!payload) return response.status(400).json({message:'données manquantes'})
    await verifyEmail(payload.user_name,payload.code,payload.email)
    response.status(200).end()
  }catch(e){
    console.log(e)
  }
}