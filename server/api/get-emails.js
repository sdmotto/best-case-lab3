// server/api/get-emails.js
import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async () => {
  const filePath = path.resolve('server/api/emails.json');

  try {
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

    // For other errors, throw an error message
    throw new Error("Error reading email logs");
  }
});
