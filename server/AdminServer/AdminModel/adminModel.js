// Add Result Model to interact with database

import { pool } from "../../server.js";

// Add result to Database
export async function addResultModel(body) {
  const { home_team, away_team, home_score, away_score } = body;
  const client = await pool.connect();
  const addResult = await client.query(
    "INSERT INTO ssjfirstresults ( home_team, away_team, home_score, away_score) VALUES ($1, $2, $3, $4)",
    [home_team, away_team, home_score, away_score]
  );
  return addResult;
}
