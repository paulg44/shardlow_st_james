import { pool } from "../server.js";

export async function getAllResults() {
  const client = await pool.connect();
  const getAllResults = await client.query(
    "SELECT * FROM ssjFirstResults WHERE id = 2"
  );
  return getAllResults;
}
