import { render, screen } from "@testing-library/react";
import TeamsDisplay from "./TeamsDisplay";

test("buttons are visible", () => {
  const mockTeamData = [{ teamName: "Team 1" }, { teamName: "Team 1" }];
  render(<TeamsDisplay teamsData={mockTeamData} />);

  const allBtns = screen.getAllByRole("button");
  const tableBtn = screen.getByRole("button", { name: /table/i });
  const resultsBtn = screen.getByRole("button", { name: /results/i });
  const playersBtn = screen.getByRole("button", { name: /players/i });

  expect(allBtns).toHaveLength(3);
  expect(tableBtn).toBeInTheDocument();
  expect(resultsBtn).toBeInTheDocument();
  expect(playersBtn).toBeInTheDocument();
});
