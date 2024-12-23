import playwright from "playwright";
import fs from "fs-extra";
import cron from "node-cron";
import dotenv from "dotenv";
import simpleGit from "simple-git";

dotenv.config();

const git = simpleGit({
  baseDir: process.cwd(),
  config: [
    `user.name=${process.env.GITHUB_USERNAME}`,
    `user.email=${process.env.GITHUB_EMAIL}`,
  ],
});

const remoteURL = `https://${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_USERNAME}/shardlow_st_james.git`;

export async function scrapeInstagramWebsite(url) {
  const browser = await playwright.chromium.launch({ headless: true });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url);
  await page.waitForTimeout(3000);

  await page.getByRole("button", { name: /allow all cookies/i }).click();
  await page.waitForTimeout(3000);

  const linkAtrributeHrefs = await page.evaluate(() => {
    const mainSection = document.querySelector("section");
    if (mainSection) {
      return Array.from(document.links).map((item) => item.href);
    }
    return [];
  });
  console.log(linkAtrributeHrefs);
  await fs.writeFile(
    "instagramData.json",
    JSON.stringify(linkAtrributeHrefs, null, 2)
  );

  await browser.close();
}

cron.schedule("48 17 * * *", async () => {
  try {
    console.log("Running scheduled scraper....");

    await scrapeInstagramWebsite("https://www.instagram.com/shardlowstjamesfc");

    await git.addRemote("origin", remoteURL).catch(() => {});
    await git.add("./instagramData.json");
    await git.commit("Daily update of SSJ Instagram data from scraper");
    await git.push("origin", "main");

    console.log("Data scraped and pushed successfully");
  } catch (error) {
    console.error("Error during scheduled cron job:", error);
  }
});
