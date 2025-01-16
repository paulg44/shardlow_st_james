// Unit test for Shop Page

import React from "react";
import "@testing-library/react";
import { screen, render } from "@testing-library/react";
import Shop from "../Components/Pages/Shop/Shop";

test("page loads and has content", () => {
  render(<Shop />);

  const heading = screen.getByRole("heading", { name: "Welcome to our shop" });

  expect(heading).toBeInTheDocument();
});

test("all items load", () => {
  render(<Shop />);

  const allItems = screen.getAllByRole("link");

  expect(allItems).toHaveLength(12);
});
