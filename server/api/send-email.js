import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const { to, fromEmail, subject, message } = await readBody(event);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "best.case.labs@gmail.com",
      pass: "jrsk bxen fwqb ddkf",
    },
  });

  const newMessage = `This email is from: ${fromEmail}\n\n` + message;

  const mailOptions = {
    from: 'best.case.labs@gmail.com',
    to,
    subject,
    text: newMessage,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
