// Add Result Model to interact with database

import { pool } from "../../server.js";

// Add result to Database
export async function addResultModel(body, selectedTeam) {
  const { home_team, away_team, home_score, away_score } = body;
  let databaseTable;

  //   Switch statement for when particular team is picked
  switch (selectedTeam) {
    case "Shardlow St James":
      databaseTable = "ssjfirstResults";
      break;
    case "Shardlow U15's":
      databaseTable = "u15results";
      break;
    case "Shardlow Vets":
      databaseTable = "vetsresults";
      break;
    default:
      throw new Error("Invalid team selected");
  }

  const client = await pool.connect();
  const addResult = await client.query(
    `INSERT INTO ${databaseTable} ( home_team, away_team, home_score, away_score) VALUES ($1, $2, $3, $4)`,
    [home_team, away_team, home_score, away_score]
  );
  client.release();
  return addResult;
}
