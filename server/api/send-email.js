import nodemailer from 'nodemailer';
import { promises as fs } from 'fs';
import path from 'path';

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

    const filePath = path.resolve('server/api/emails.json');

    // Read existing email logs (or create an empty array if file does not exist)
    let emailLogs = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf8');
      emailLogs = JSON.parse(fileData);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;  // Ignore if file does not exist
    }

    // Append the new email log
    emailLogs.push(mailOptions);

    // Write the updated logs back to the file
    await fs.writeFile(filePath, JSON.stringify(emailLogs, null, 2));


    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
