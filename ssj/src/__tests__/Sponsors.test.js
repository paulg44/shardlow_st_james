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
