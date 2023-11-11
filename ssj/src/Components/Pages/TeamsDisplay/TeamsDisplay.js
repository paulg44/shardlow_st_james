// Teams Component
/* Plan for teams architecture 
     - 4 teams First, Reserves, Vets, U15
     - 4 options from dropdown on navbar
     - store each teams data in an array
     - if specific team is clicked bring corresponding data
     - components = TeamsDisplay, Team
*/

import Teams from "./Teams/Teams.js";
import "./TeamsDisplay.css";

function TeamsDisplay() {
  // Data will be pulled from fa, for now using dummy data
  const teamsData = [
    {
      teamName: "SSJ First Team",
      latestResult: "2-0",
      nextFixture: "Aston FC (A)",
      table: "Blank for now",
    },
    {
      teamName: "SSJ Reserves",
      latestResult: "6-2",
      nextFixture: "Weston FC (H)",
      table: "Blank for now",
    },
    {
      teamName: "SSJ Veterans",
      latestResult: "100-0",
      nextFixture: "Derby County (A)",
      table: "Blank for now",
    },
    {
      teamName: "SSJ U15",
      latestResult: "7-1",
      nextFixture: "Alvaston U15 (H)",
      table: "Blank for now",
    },
  ];

  // Possibly use this with the api?
  // const selectedTeam = teamsData[0];
  return (
    <div className="teamsDisplay">
      <div>
        {teamsData.map((teams, index) => (
          <div key={index}>
            <Teams {...teams} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamsDisplay;
