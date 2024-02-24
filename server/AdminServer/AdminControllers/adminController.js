import * as addResultModel from "../AdminModel/adminModel.js";

// Add Result into database
export async function addResultController(req, res) {
  try {
    const data = req.body;
    const results = await addResultModel.addResultController(data);
    console.log(`Success, payload ${results.row}`);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
