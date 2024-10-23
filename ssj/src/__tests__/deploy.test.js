import data from "../../../webScraper/instagramData.json";

test("if number 8 inb the array is 52 characters, the scraper has worked as expected", () => {
  const firstPostEntry = data[7];
  const expectedLengthOfEntry = 58;

  expect(firstPostEntry.length).toBe(expectedLengthOfEntry);
});
