import { promises as fs } from "fs";
import path from "path";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const filePath = path.resolve("db/emails.json");

  const token = getCookie(event, "authToken");

  if (!token) {
    return [{ nice: "try" }];
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.verified) {
      return [{ nice: "try" }];
    }

    const fileData = await fs.readFile(filePath, "utf8");
    const emailLogs = JSON.parse(fileData);

    return emailLogs;
  } catch (error) {
    throw new Error("ermm");
  }
});
