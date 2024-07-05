// Teams Component
/* Plan for teams architecture 
     - 4 teams First, Reserves, Vets, U15
     - 4 options from dropdown on navbar
     - store each teams data in an array
     - if specific team is clicked set activeTeam to corresponding data
     - components = TeamsDisplay, Team

*/

import { useEffect } from "react";
import ResultsFixtures from "./Results/Fixtures/ResultsFixtures.js";
import "./TeamsDisplay.css";
import Table from "./Table/Table.js";

function TeamsDisplay({ teamsData, activeTeam }) {
  useEffect(() => {
    console.log("Active Team:", activeTeam);
  }, [activeTeam]);

  // Could I move the team select into here and add a link in the Nav for team information or TEAMS??? Better UI/UX needed
  return <div className="teamsDisplay"></div>;
}

export default TeamsDisplay;
