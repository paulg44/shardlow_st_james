import express from "express";

import * as latestResultController from "../controllers/latestResult.js";

export const latestResult = express.Router();

latestResult.get("/", latestResultController.getLatestResult);
