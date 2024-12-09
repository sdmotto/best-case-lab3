import jwt from "jsonwebtoken";
import { runQuery } from "./db";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "authToken");

  if (!token) {
    return [{ nice: "try" }];
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded.verified) {
    return [{ nice: "try" }];
  }

  const emailLogs = await runQuery("SELECT * FROM emails");
  
  return emailLogs;
});
