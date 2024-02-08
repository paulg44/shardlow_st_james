import * as latestResultModel from "../models/latestResult.js";

// Retrieve latest result
export async function getLatestResult(req, res) {
  try {
    const getResult = await latestResultModel.getLatestResult();
    res.json(logs.rows);
    console.log(`Success, payload ${logs.rows}`);
  } catch (error) {
    console.error("Error executing query", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}
