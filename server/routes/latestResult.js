import express from "express";

import * as latestResultController from "../controllers/latestResult.js";

export const resultsRoutes = express.Router();

resultsRoutes.get("/", latestResultController.getLatestResult);
