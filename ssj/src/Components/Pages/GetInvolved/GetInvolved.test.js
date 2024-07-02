// Unit test for Events Page

import React from "react";
import "@testing-library/react";
import { screen, render } from "@testing-library/react";
import GetInvolved from "./GetInvolved";

test("page loads and has content", () => {
  render(<GetInvolved />);

  const heading = screen.getByRole("heading", { name: /get involved/i });

  expect(heading).toBeInTheDocument();
});
