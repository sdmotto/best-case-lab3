import jwt from 'jsonwebtoken';
import { getCookie } from 'h3';

export default defineEventHandler((event) => {
  // Retrieve the JWT from the authToken cookie
  const token = getCookie(event, 'authToken');

  try {
    // Verify the token using the server’s secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If verification is successful, return isVerified: true
    return { isVerified: !!decoded.verified };
  } catch (error) {
    // If token is missing, invalid, or expired, return isVerified: false
    return { isVerified: false };
  }
});