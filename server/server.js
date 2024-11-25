import express from "express";
import cors from "cors";
import fs from "fs-extra";
import dotenv from "dotenv";
import cron from "node-cron";
import { scrapeInstagramWebsite } from "./scraper.js";
import simpleGit from "simple-git";

dotenv.config();

// Current variables for github are running as undefined!!!!!!!!
const git = simpleGit({
  baseDir: process.cwd(),
  config: [
    `user.name=${process.env.GITHUB_USERNAME}`,
    `user.email=${process.env.GITHUB_EMAIL}`,
  ],
});

const remoteURL = `https://${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_USERNAME}/shardlow_st_james.git`;

const app = express();
app.use(
  cors({
    origin: `${process.env.REACT_APP_FRONTEND_URL_PROD}`,
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://ssjfc.co.uk");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.options("*", cors());
app.use(express.json());

const PORT = process.env.REACT_APP_SERVER_PORT;

app.get("/instagramData", async (req, res) => {
  try {
    const scrapedData = await fs.readFile("./instagramData.json", "utf-8");
    res.json(JSON.parse(scrapedData));
  } catch (error) {
    console.error("Error reading json data server side", error);
    res
      .status(500)
      .json({ error: "Failed to load scraped data from Instagram" });
  }
});

cron.schedule("13 15 * * *", async () => {
  try {
    console.log("Running daily scraper");

    await git.remote(["set-url", "origin", remoteURL]);

    // Should this be in an env file as someone could change it??
    await scrapeInstagramWebsite("https://www.instagram.com/shardlowstjamesfc");

    const data = await fs.readFile("instagramData.json", "utf-8");
    const parseData = JSON.parse(data);
    await fs.writeFile(
      "instagramData.json",
      JSON.stringify(parseData, null, 2)
    );

    // Push changes
    await git.add("./instagramData.json");
    await git.commit("Daily update of SSJ Instagram data fromm scraper");
    await git.push("origin", "main");
    console.log("Pushed daily update successfully");
  } catch (error) {
    console.error("Error running scheduled job:", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
