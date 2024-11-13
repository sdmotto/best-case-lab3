import jwt from 'jsonwebtoken';
import { getCookie } from 'h3';

export default defineEventHandler((event) => {
  const token = getCookie(event, 'authToken');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return { isVerified: !!decoded.verified };
  } catch (error) {
    return { isVerified: false };
  }
});