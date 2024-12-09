import sqlite3 from "sqlite3";
import { open } from "sqlite";
import fs from "fs";

// Path to your SQLite database file
const dbFilePath = "./db/dev.sqlite3";

(async () => {
  try {
    // Check if the database file exists
    if (!fs.existsSync(dbFilePath)) {
      console.log("Database file does not exist. Initializing...");
    } else {
      console.log("Database file already exists. Skipping initialization.");
      return;
    }

    // Open the database
    const db = await open({
      filename: dbFilePath,
      driver: sqlite3.Database,
    });

    // Create tables
    console.log("Creating tables...");
    await db.exec(`
      CREATE TABLE IF NOT EXISTS emails (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        "from" TEXT NOT NULL,
        "to" TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        person TEXT
      )
    `);

    console.log("Database initialized successfully.");
    await db.close();
  } catch (error) {
    console.error("Error initializing the database:", error);
    process.exit(1);
  }
})();
