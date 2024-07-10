// Teams Component
/* Plan for teams architecture 
     - 4 teams First, Reserves, Vets, U15
     - 4 options from dropdown on navbar
     - store each teams data in an array
     - if specific team is clicked set activeTeam to corresponding data
     - components = TeamsDisplay, Team

*/

import { useState } from "react";
import ResultsFixtures from "./Results/Fixtures/ResultsFixtures.js";
import "./TeamsDisplay.css";
import Table from "./Table/Table.js";
import Players from "./Players/Players.js";

function TeamsDisplay({ teamsData, handleTeamClick, activeTeam }) {
  const [displaySelectedTeam, setDisplaySelectedTeam] = useState("");
  const [selectedElementView, setSelectedElementView] = useState("table");

  function displayTeam(e) {
    const displaySelectedValue = e.target.value;
    setDisplaySelectedTeam(displaySelectedValue);
    handleTeamClick(displaySelectedValue);
  }

  // Could I move the team select into here and add a link in the Nav for team information or TEAMS??? Better UI/UX needed
  return (
    <div className="teamsDisplay">
      <div className="teamAndElementSelect">
        <label htmlFor="teams">Select a Team</label>
        <select name="teams" value={displaySelectedTeam} onChange={displayTeam}>
          {teamsData.map((teamsData, id) => (
            <option key={id}>{teamsData.teamName}</option>
          ))}
        </select>

        {activeTeam && (
          <div className="teamDisplayButtons">
            <button onClick={() => setSelectedElementView("table")}>
              Table
            </button>
            <button onClick={() => setSelectedElementView("results")}>
              Results
            </button>
            <button onClick={() => setSelectedElementView("players")}>
              Players
            </button>
          </div>
        )}
      </div>

      {/* HOW TO DISPLAY THIS DYNAMICALLY???? */}
      <div className="teamContentContainer">
        {activeTeam && selectedElementView === "table" && (
          <Table activeTeam={activeTeam} />
        )}
        <div className="displayResults">
          {activeTeam && selectedElementView === "results" && (
            <ResultsFixtures activeTeam={activeTeam} />
          )}
        </div>
        {activeTeam && selectedElementView === "players" && (
          <Players activeTeam={activeTeam} />
        )}
      </div>
    </div>
  );
}

export default TeamsDisplay;
