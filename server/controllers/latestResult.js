import * as latestResultModel from "../models/latestResult.js";

// Retrieve latest result
export async function getLatestResult(req, res) {
  try {
    const latestResult = await latestResultModel.getLatestResult();
    res.json(latestResult.rows);
    console.log(`Success, payload ${latestResult.rows}`);
  } catch (error) {
    console.error("Error executing query", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}
