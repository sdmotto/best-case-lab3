import { promises as fs } from "fs";
import path from "path";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const filePath = path.resolve(process.cwd(), "db/emails.json");

  const token = getCookie(event, "authToken");

  if (!token) {
    return [{ nice: "try" }];
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded.verified) {
    return [{ nice: "try" }];
  }

  const fileData = await fs.readFile(filePath, "utf8");
  const emailLogs = JSON.parse(fileData);

  return emailLogs;
});
