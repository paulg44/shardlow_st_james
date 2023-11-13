// Teams Component
/* Plan for teams architecture 
     - 4 teams First, Reserves, Vets, U15
     - 4 options from dropdown on navbar
     - store each teams data in an array
     - if specific team is clicked set activeTeam to corresponding data
     - components = TeamsDisplay, Team

*/

import { useEffect } from "react";
import Teams from "./Teams/Teams.js";
import "./TeamsDisplay.css";

function TeamsDisplay({ teamsData, activeTeam }) {
  useEffect(() => {
    console.log("Active Team:", activeTeam);
  }, [activeTeam]);

  return (
    <div className="teamsDisplay">
      <div>
        {teamsData.map((team, index) => (
          <div key={index}>
            <Teams
              {...team}
              isActive={activeTeam && team.teamName === activeTeam.teamName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamsDisplay;
