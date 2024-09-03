// Unit test for Contact Page

import React from "react";
import "@testing-library/react";
import { screen, render } from "@testing-library/react";
import Contact from "../Components/Pages/Contact/Contact";

test("page loads and has content", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading", { name: /contact/i });

  expect(heading).toBeInTheDocument();
});

test("it shows a phone number and email address", () => {
  render(<Contact />);

  const phone = screen.getByText(/07772841404/i);
  const email = screen.getByRole("link", { name: /ssjfc/i });

  expect(phone).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
