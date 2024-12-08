import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  const { to, fromEmail, subject, message, person } = await readBody(event);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "best.case.labs@gmail.com",
      pass: "jrsk bxen fwqb ddkf",
    },
  });

  const mailOptions = {
    from: "best.case.labs@gmail.com",
    to,
    subject,
    text: formatEmail(),
  };

  try {
    await transporter.sendMail(mailOptions);
    await saveEmail();

    return { success: true };
  } catch (error) {
    return { success: false };
  }

  function formatEmail() {
    return `This email is sent from: ${fromEmail}.\n\n` + message;
  }

  async function saveEmail() {
    const filePath = path.resolve("db/emails.json");

    let emailLogs = [];
    const fileData = await fs.readFile(filePath, "utf8");
    emailLogs = JSON.parse(fileData);

    emailLogs.push({
      from: fromEmail,
      to: to,
      subject: subject,
      message: message,
      timestamp: new Date().toISOString(),
      person: person
    });

    await fs.writeFile(filePath, JSON.stringify(emailLogs, null, 2));
  }
});
