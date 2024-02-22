// Model interacts with the database

import { pool } from "../server.js";

export async function getLatestResult() {
  const client = await pool.connect();
  const getLatest = await client.query(
    "SELECT * FROM ssjFirstResults WHERE id = 5"
  );
  client.release();
  return getLatest;
}
