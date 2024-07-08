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
import { Link } from "react-router-dom";
import Players from "./Players/Players.js";

function TeamsDisplay({ teamsData, handleTeamClick }) {
  const [displaySelectedTeam, setDisplaySelectedTeam] = useState("");

  function displayTeam(e) {
    const displaySelectedValue = e.target.value;
    setDisplaySelectedTeam(displaySelectedValue);
    handleTeamClick(displaySelectedValue);
  }

  // Could I move the team select into here and add a link in the Nav for team information or TEAMS??? Better UI/UX needed
  return (
    <div className="teamsDisplay">
      <label htmlFor="teams">Select a Team</label>
      <select name="teams" value={displaySelectedTeam} onChange={displayTeam}>
        <option></option>{" "}
        {teamsData.map((teamsData, id) => (
          <option key={id}>{teamsData.teamName}</option>
        ))}
      </select>
      <ul>
        <li>
          <Link to={`/teams/${displaySelectedTeam}/table`}>Table</Link>
        </li>
        <li>
          <Link to={`/teams/${displaySelectedTeam}/results`}>Results</Link>
        </li>
        <li>
          <Link to={`/teams/${displaySelectedTeam}/players`}>Players</Link>
        </li>
      </ul>
      <div className="teamContentContainer">
        {/* <Table />
        <ResultsFixtures />
        <Players /> */}
      </div>
    </div>
  );
}

export default TeamsDisplay;
