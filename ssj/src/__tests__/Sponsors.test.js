// Unit test for Sponsors Page

import React from "react";
import "@testing-library/react";
import { screen, render } from "@testing-library/react";
import Sponsors from "../Components/Pages/Sponsors/Sponsors";

test("page loads and has content", () => {
  render(<Sponsors />);

  const heading = screen.getByRole("heading", {
    name: "Proudly Sponsored By...",
  });

  expect(heading).toBeInTheDocument();
});

test("the correct number of sponsors, currently 4", () => {
  render(<Sponsors />);

  const sponsors = screen.getAllByRole("link");

  expect(sponsors).toHaveLength(4);
});
