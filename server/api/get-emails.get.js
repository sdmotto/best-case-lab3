import sqlite3 from "sqlite3";
import { open } from "sqlite";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const dbFilePath = "./db/dev.sqlite3";

  const token = getCookie(event, "authToken");

  if (!token) {
    return [{ nice: "try" }];
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded.verified) {
    return [{ nice: "try" }];
  }

  const db = await open({
    filename: dbFilePath,
    driver: sqlite3.Database,
  });

  try {
    // Fetch all email logs from the database
    const emailLogs = await db.all("SELECT * FROM emails");

    return emailLogs;
  } catch (error) {
    console.error("Error fetching email logs:", error);
    throw createError({ statusCode: 500, message: "Internal Server Error" });
  } finally {
    await db.close();
  }
});
