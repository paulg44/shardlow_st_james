import * as latestResultModel from "../models/allResults.js";

// Retrieve all results
export async function getAllResults(req, res) {
  try {
    const results = await latestResultModel.getAllResults();
    res.json(results.rows);
    console.log(`Success, payload ${results.rows}`);
  } catch (error) {
    console.error("Error executing query", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}
