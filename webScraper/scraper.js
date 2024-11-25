import playwright from "playwright";
import fs from "fs-extra";

async function scrapeInstagramWebsite(url) {
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

  fs.writeFile(
    "instagramData.json",
    JSON.stringify(linkAtrributeHrefs, null, 2)
  );

  await browser.close();
}

scrapeInstagramWebsite("https://www.instagram.com/shardlowstjamesfc");
