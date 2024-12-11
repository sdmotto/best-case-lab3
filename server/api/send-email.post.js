import nodemailer from "nodemailer";
import { runQuery } from "./db";

export default defineEventHandler(async (event) => {
  const { to, fromEmail, subject, message, person } = await readBody(event);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "best.case.labs@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "best.case.labs@gmail.com",
    to,
    subject,
    text: formatEmail(),
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);

    // Save email log to database
    await saveEmail();

    return { success: true };
  } catch (error) {
    console.error("Error sending email or saving log:", error);
    return { success: false };
  }

  function formatEmail() {
    return `This email is sent from: ${fromEmail}.\n\n` + message;
  }

  async function saveEmail() {
    await runQuery(
      `INSERT INTO emails ("from", "to", subject, message, timestamp, person) VALUES ($1, $2, $3, $4, $5, $6)`,
      [fromEmail, to, subject, message, new Date().toISOString(), person]
    );
  }
});