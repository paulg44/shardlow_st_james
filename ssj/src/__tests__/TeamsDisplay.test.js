import { getByRole, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { selectEvent } from "react-select-event";
import TeamsDisplay from "../Components/Pages/TeamsDisplay/TeamsDisplay.js";
import { MemoryRouter } from "react-router";

function renderComponent() {
  const mockTeamData = [
    {
      id: 1,
      lrcodeTable: 1234,
      lrcodeResults: 5678,
      teamName: "SSJ First Team",
    },
    {
      id: 2,
      lrcodeTable: 91011,
      lrcodeResults: 121314,
      teamName: "SSJ Reserves",
    },
  ];
  const handleTeamClick = jest.fn();
  render(
    <TeamsDisplay
      teamsData={mockTeamData}
      defaultValue="No team selected"
      handleTeamClick={handleTeamClick}
      activeTeam={null}
    />
  );
  return { handleTeamClick, mockTeamData };
}

test("buttons are visible", () => {
  renderComponent();

  const allBtns = screen.getAllByRole("button");
  const tableBtn = screen.getByRole("button", { name: /table/i });
  const resultsBtn = screen.getByRole("button", { name: /results/i });
  // const playersBtn = screen.getByRole("button", { name: /players/i });

  expect(allBtns).toHaveLength(2);
  expect(tableBtn).toBeInTheDocument();
  expect(resultsBtn).toBeInTheDocument();
  // expect(playersBtn).toBeInTheDocument();
});

/* 
What I want to do
    - render component with the mock function of handleTeamClick
    - mock the team names as above
    - "find" the select dropdown
    - select an option, example SSJ First Team

This should then in theory call the handleTeamClick function with the value of SSJ First Team

How the app works is a user selects a team - SSJ First Team =>
  users selected value is saved as displaySelectedTeam => 
    handleTeamClick is called with displaySelectedTeam as input => 
      Over to App => 
         handleTeamClick then finds the displaySelectedTeam as teamName =>
          sets active team to the team the user has selected =>
            that is then passed back to the teamsDisplay component =>
              to be used to render table/results dependant on chosen team =>
                question for Jade, could/should I move the handleTeamClick, teams array and activeTeam to the teamsDisplay component for better testing? if I remember correctly they were in app as originally I was using them in a component and the dropdown was within in the navbar
*/

test("mock function gets called", async () => {
  const { handleTeamClick } = renderComponent();

  const selectInput = screen.getByRole("combobox");

  expect(selectInput).toHaveValue("");

  user.selectOptions(selectInput, "SSJ First Team");

  expect(selectInput).toHaveValue("SSJ First Team");

  const selectedTeamHeader = screen.getByRole("heading", {
    name: "SSJ First Team",
  });

  expect(selectedTeamHeader).toBeInTheDocument();
  // expect(handleTeamClick).toHaveBeenCalledWith("SSJ First Team");
});
