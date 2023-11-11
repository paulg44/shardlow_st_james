// Teams Component
/* Plan for teams architecture 
     - 4 teams First, Reserves, Vets, U15
     - 4 options from dropdown on navbar
     - store each teams data in an array
     - if specific team is clicked bring corresponding data
     - components = TeamsDisplay, Team
*/

import "./TeamsDisplay.css";
import Teams from "./Teams/Teams";

function TeamsDisplay() {
  // Data will be pulled from fa
  const teamsData = [
    {
      teamName: "SSJ First Team",
    },
  ];
  return (
    <div>
      <Teams />
    </div>
  );
}

export default TeamsDisplay;
