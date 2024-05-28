import * as addResultModel from "../AdminModel/adminModel.js";

// Add Result into database
export async function addResultController(req, res) {
  try {
    const data = req.body;
    const selectedTeam = data.selectedTeam;
    const results = await addResultModel.addResultModel(data, selectedTeam);
    // Because I'm post not get, it doesn't return anything. Don't need the JSON
    console.log(`Success, payload ${results.rows}`);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
