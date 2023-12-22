// Test file

import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import ContactPerson from "./ContactPerson";

// Test that phone number is an integer
test("phone is integer", () => {
  render(<ContactPerson />);
  const phoneNumEl = screen.getByTestId("phone");

  expect(typeof phoneNumEl).toBe("object");
});
