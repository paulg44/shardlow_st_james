import express from "express";
import cors from "cors";
import fs from "fs-extra";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: `${process.env.REACT_APP_FRONTEND_URL_PROD}`,
    credentials: true,
  })
);
app.options("*", cors());

const PORT = process.env.REACT_APP_SERVER_PORT;

app.get("/instagramData", async (req, res) => {
  try {
    const scrapedData = await fs.readFile(
      "../webScraper/instagramData.json",
      "utf-8"
    );
    res.json(JSON.parse(scrapedData));
  } catch (error) {
    console.error("Error reading json data server side", error);
    res
      .status(500)
      .json({ error: "Failed to load scraped data fromm Instagram" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
