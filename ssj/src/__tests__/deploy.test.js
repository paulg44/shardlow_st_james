// import data from "../../../server/instagramData.json";

import { screen, render } from "@testing-library/react";
import Homepage from "../Components/Pages/Homepage/Homepage";

// test("if number 8 inb the array is 52 characters, the scraper has worked as expected", () => {
//   const firstPostEntry = data[7];
//   const expectedLengthOfEntry = 58;

//   expect(firstPostEntry.length).toBe(expectedLengthOfEntry);
// });

test("plaeceholder", () => {
  render(<Homepage />);
  const header = screen.getByText("Shardlow St James FC");

  expect(header).toBeInTheDocument();
});
