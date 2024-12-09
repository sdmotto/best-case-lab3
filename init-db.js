import sqlite3 from "sqlite3";
import { open } from "sqlite";
import pg from "pg";
import fs from "fs";

// Check the environment
const isProduction = process.env.NODE_ENV === "production";

// Database connection settings
const dbFilePath = "./db/dev.sqlite3";
const pgConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Heroku Postgres
  },
};

(async () => {
  try {
    if (isProduction) {
      console.log("Initializing PostgreSQL database...");

      // Connect to PostgreSQL
      const pool = new pg.Pool(pgConfig);
      const client = await pool.connect();

      // Create the table
      await client.query(`
        CREATE TABLE IF NOT EXISTS emails (
          id SERIAL PRIMARY KEY,
          "from" TEXT NOT NULL,
          "to" TEXT NOT NULL,
          subject TEXT NOT NULL,
          message TEXT NOT NULL,
          timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          person TEXT
        );
      `);

      console.log("PostgreSQL database initialized.");
      client.release();
      await pool.end();
    } else {
      console.log("Initializing SQLite database...");

      // Check if the SQLite database file exists
      if (!fs.existsSync(dbFilePath)) {
        console.log("Database file does not exist. Initializing...");
      } else {
        console.log("Database file already exists. Skipping initialization.");
        return;
      }

      // Open SQLite database
      const db = await open({
        filename: dbFilePath,
        driver: sqlite3.Database,
      });

      // Create the table
      await db.exec(`
        CREATE TABLE IF NOT EXISTS emails (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          "from" TEXT NOT NULL,
          "to" TEXT NOT NULL,
          subject TEXT NOT NULL,
          message TEXT NOT NULL,
          timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
          person TEXT
        );
      `);

      console.log("SQLite database initialized.");
      await db.close();
    }
  } catch (error) {
    console.error("Error initializing the database:", error);
    process.exit(1); // Exit with error code
  }
})();
