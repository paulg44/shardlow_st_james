import express from "express";

// Add a result to database

import * as resultsController from "../AdminControllers/adminController.js";

export const adminResultsRoutes = express.Router();

adminResultsRoutes.post("/", resultsController.addResultController);
