// Unit Test Homepage

import { screen, render } from "@testing-library/react";
import Homepage from "../Components/Pages/Homepage/Homepage";

test("homepage render", () => {
  render(<Homepage />);
  const header = screen.getByText("Shardlow St James FC");

  expect(header).toBeInTheDocument();
});
