import sqlite3 from "sqlite3";
import { open } from "sqlite";
import pg from "pg";

const isProduction = process.env.NODE_ENV === "production";

let db;

/**
 * Initialize the database connection.
 */
export async function getDb() {
  if (db) return db; // Reuse the connection if already initialized

  if (isProduction) {
    // PostgreSQL connection for production
    const { Pool } = pg;
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL, // Provided by Heroku
      ssl: {
        rejectUnauthorized: false, // Required for Heroku Postgres
      },
    });
    db = pool;
  } else {
    // SQLite connection for development
    db = await open({
      filename: "./db/dev.sqlite3",
      driver: sqlite3.Database,
    });
  }

  return db;
}

/**
 * Run a query on the database.
 * For SQLite, `params` is an array of parameters for the query.
 * For PostgreSQL, `params` is passed as-is to the query method.
 */
export async function runQuery(query, params = []) {
  const database = await getDb();

  if (isProduction) {
    const result = await database.query(query, params);
    return result.rows; // PostgreSQL returns rows in `result.rows`
  } else {
    return await database.all(query, params); // SQLite uses `all` for SELECT
  }
}
