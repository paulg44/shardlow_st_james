import express from "express";

import * as latestResultController from "../controllers/allResults.js";

export const allResultsRoutes = express.Router();

allResultsRoutes.get("/", latestResultController.getAllResults);
