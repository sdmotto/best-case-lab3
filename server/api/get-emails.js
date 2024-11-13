import { promises as fs } from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const filePath = path.resolve('server/api/emails.json');

  // Retrieve the JWT from cookies
  const token = getCookie(event, 'authToken');

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is verified
    if (!decoded.verified) {
      throw new Error("Unauthorized access");
    }

    // Read the email logs from the file
    const fileData = await fs.readFile(filePath, 'utf8');
    const emailLogs = JSON.parse(fileData);

    // Return the list of emails as a JSON response
    return emailLogs;

  } catch (error) {
    // If the file does not exist, return an empty array
    if (error.code === 'ENOENT') {
      return [];
    }
    
    // If the token is invalid or verification fails, return an unauthorized error
    throw new Error("Unauthorized access");
  }
});
