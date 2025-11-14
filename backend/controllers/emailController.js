// backend/controllers/emailController.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: 'pascom@santuariodefatima.com.br',
      subject: `Contato do Site: ${name}`,
      html: `
        <h3>Nova mensagem de contato</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
        <p><em>Enviado em: ${new Date().toLocaleString('pt-BR')}</em></p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ error: 'Erro ao enviar email' });
  }
};