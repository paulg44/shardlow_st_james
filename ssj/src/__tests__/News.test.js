// Unit test for News Page

import React from "react";
import "@testing-library/react";
import { screen, render } from "@testing-library/react";
import News from "../Components/Pages/News/News";

test("page loads and has content", () => {
  render(<News />);

  const heading = screen.getByRole("heading", { name: "Latest News" });

  expect(heading).toBeInTheDocument();
});
