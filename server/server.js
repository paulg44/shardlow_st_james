// Server file

import express from "express";
import pkg from "pg";
import dotenv from "dotenv";
import cors from "cors";
import { resultsRoutes } from "./routes/latestResult.js";
import { allResultsRoutes } from "./routes/allResults.js";
import { adminResultsRoutes } from "./AdminServer/AdminRoutes/adminRoute.js";

dotenv.config();

const { Pool } = pkg;

const app = express();
const port = process.env.REACT_APP_PORT;
const connectionString = process.env.REACT_APP_SSJ_DB_STRING;

export const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());
app.use(cors());

app.use("/api/latestResult", resultsRoutes);
app.use("/api/all", allResultsRoutes);

// Admin
app.use("/api/admin", adminResultsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
