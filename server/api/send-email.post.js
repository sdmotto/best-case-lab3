import nodemailer from "nodemailer";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default defineEventHandler(async (event) => {
  const { to, fromEmail, subject, message, person } = await readBody(event);

  const dbFilePath = "./db/dev.sqlite3";

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
    const db = await open({
      filename: dbFilePath,
      driver: sqlite3.Database,
    });

    try {
      await db.run(
        `INSERT INTO emails ("from", "to", subject, message, timestamp, person) VALUES (?, ?, ?, ?, ?, ?)`,
        [fromEmail, to, subject, message, new Date().toISOString(), person]
      );

      console.log("Email log saved successfully.");
    } catch (error) {
      console.error("Error saving email log to database:", error);
    } finally {
      await db.close();
    }
  }
});
