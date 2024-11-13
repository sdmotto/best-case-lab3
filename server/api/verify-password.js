import jwt from 'jsonwebtoken';
import { defineEventHandler, readBody, setCookie } from 'h3';

const correctPassword = process.env.CORRECT_PASSWORD;

export default defineEventHandler(async (event) => {
  const { password } = await readBody(event);

  if (password === correctPassword) {
    // Generate a JWT with verification info
    const token = jwt.sign({ verified: true }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set the JWT as an HTTP-only cookie
    setCookie(event, 'authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });

    return { success: true };
  } else {
    return { success: false };
  }
});