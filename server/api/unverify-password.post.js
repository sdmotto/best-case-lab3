import { defineEventHandler, setCookie } from "h3";

export default defineEventHandler((event) => {
  setCookie(event, "authToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });
  return { success: true };
});
