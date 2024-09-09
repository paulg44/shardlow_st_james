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
import { FaRegHeart } from "react-icons/fa";

function TeamsDisplay({ teamsData, handleTeamClick, activeTeam }) {
  const [displaySelectedTeam, setDisplaySelectedTeam] = useState("");
  const [selectedElementView, setSelectedElementView] = useState("table");

  function displayTeam(e) {
    const displaySelectedValue = e.target.value;
    setDisplaySelectedTeam(displaySelectedValue);
    handleTeamClick(displaySelectedValue);
  }

  return (
    <div className="teamsDisplay">
      {/* Only show if active team is selected */}
      {activeTeam && activeTeam.teamName ? (
        <h2>
          {activeTeam.teamName}
          <button>
            <FaRegHeart />
          </button>
        </h2>
      ) : (
        <h2>Shardlow St James FC</h2>
      )}
      <div className="teamAndElementSelect">
        <label htmlFor="teams">Select a Team</label>
        <select
          name="teamsSelect"
          value={displaySelectedTeam}
          onChange={displayTeam}
        >
          <option value="" hidden>
            No team selected
          </option>
          {teamsData.map((teamsData, id) => (
            <option key={id}>{teamsData.teamName}</option>
          ))}
        </select>

        <div className="teamDisplayButtons">
          <button onClick={() => setSelectedElementView("table")}>Table</button>
          <button onClick={() => setSelectedElementView("results")}>
            Results
          </button>
          {/* <button onClick={() => setSelectedElementView("players")}>
            Players
            </button> */}
        </div>
      </div>

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
