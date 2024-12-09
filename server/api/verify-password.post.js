import jwt from "jsonwebtoken";
import { defineEventHandler, readBody, setCookie } from "h3";

const correctPassword = process.env.CORRECT_PASSWORD;

export default defineEventHandler(async (event) => {
  const { password } = await readBody(event);

  if (password === correctPassword) {
    const token = jwt.sign({ verified: true }, correctPassword, {
      expiresIn: "1h",
    });

    setCookie(event, "authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
      path: "/",
    });

    return { success: true };
  } else {
    return { success: false };
  }
});
