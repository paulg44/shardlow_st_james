// Unit test for Contact Page

import React from "react";
import "@testing-library/react";
import { screen, render } from "@testing-library/react";
import Contact from "./Contact";

test("page loads and has content", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading", { name: "Contact" });

  expect(heading).toBeInTheDocument();
});
