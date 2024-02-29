// Unit test for Events Page

import React from "react";
import "@testing-library/react";
import { screen, render } from "@testing-library/react";
import Events from "../Events/Events";

test("page loads and has content", () => {
  render(<Events />);

  const heading = screen.getByRole("heading", { name: "Upcoming Events" });

  expect(heading).toBeInTheDocument();
});
