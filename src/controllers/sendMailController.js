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