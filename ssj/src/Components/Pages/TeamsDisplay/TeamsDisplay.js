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
import Table from "./Teams/Table.js";
import Results from "./Teams/Results.js";

function TeamsDisplay({ teamsData, activeTeam }) {
  useEffect(() => {
    console.log("Active Team:", activeTeam);
  }, [activeTeam]);

  // useEffect(() => {
  //   // This code will be executed after the component is mounted
  //   const script = document.createElement("script");
  //   script.language = "javascript";
  //   script.type = "text/javascript";
  //   script.text = 'var lrcode = "25025117";';

  //   const csScript = document.createElement("script");
  //   csScript.language = "Javascript";
  //   csScript.type = "text/javascript";
  //   csScript.src = "https://fulltime.thefa.com/client/api/cs1.js";

  //   document.getElementById("lrep25025117").appendChild(script);
  //   document.body.appendChild(csScript);
  // }, []);

  return (
    <div className="teamsDisplay">
      <Table />
      <Results />
      {/* <div id="lrep25025117" style={{ width: "350px" }}>
        Data loading....
        <a href="https://fulltime.thefa.com/index.html?divisionseason=88093185">
          click here for Two
        </a>
        <br />
        <br />
        <a href="http://www.thefa.com/FULL-TIME">FULL-TIME Home</a>
      </div> */}
      {/* <div>
        {teamsData.map((team, index) => (
          <div key={index}>
            {activeTeam && team.teamName === activeTeam.teamName ? (
              <Teams {...team} isActive={true} />
            ) : (
              ""
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default TeamsDisplay;
