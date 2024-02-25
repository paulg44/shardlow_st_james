// Unit Test Homepage

import { screen, render } from "@testing-library/react";
import Homepage from "./Homepage";

test("homepage render", () => {
  render(<Homepage />);
  const header = screen.getByRole("heading");

  expect(header).toBeInTheDocument();
});
