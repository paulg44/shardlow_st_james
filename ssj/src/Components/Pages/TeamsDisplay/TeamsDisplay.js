// Teams Component
/* Plan for teams architecture 
     - 4 teams First, Reserves, Vets, U15
     - 4 options from dropdown on navbar
     - store each teams data in an array
     - if specific team is clicked set activeTeam to corresponding data
     - components = TeamsDisplay, Team

*/

import { useState, useEffect } from "react";
import ResultsFixtures from "./Results/Fixtures/ResultsFixtures.js";
import "./TeamsDisplay.css";
import Table from "./Table/Table.js";
// import { FaRegHeart } from "react-icons/fa";

function TeamsDisplay() {
  const [displaySelectedTeam, setDisplaySelectedTeam] = useState("");
  const [selectedElementView, setSelectedElementView] = useState("table");
  const teamsData = [
    {
      id: 1,
      teamName: "SSJ First Team",
      lrcodeTable: "344078633",
      lrcodeResults: "473831191",
    },
    {
      id: 2,
      teamName: "SSJ Reserves",
      lrcodeTable: "692613147",
      lrcodeResults: "535835625",
    },
    {
      id: 3,
      teamName: "SSJ U16's",
      lrcodeTable: "275862418",
      lrcodeResults: "782532645",
    },
    {
      id: 4,
      teamName: "SSJ Veteran's",
      lrcodeTable: "930383279",
      lrcodeResults: "814947177",
    },
  ];

  // Possibly use this with the api?
  const [activeTeam, setActiveTeam] = useState("");

  const handleTeamClick = (teamName) => {
    const selectedTeam = teamsData.find((team) => team.teamName === teamName);
    console.log("Selected Team:", selectedTeam);
    setActiveTeam(selectedTeam);
  };

  useEffect(() => {
    console.log("active team from app.js", activeTeam);
  }, [activeTeam]);

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
          {/* <button><FaRegHeart /></button> */}
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
            <option key={id} value={teamsData.teamName}>
              {teamsData.teamName}
            </option>
          ))}
        </select>

        <div className="teamDisplayButtons">
          <button onClick={() => setSelectedElementView("table")}>Table</button>
          <button onClick={() => setSelectedElementView("results")}>
            Fixtures/Results
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
      </div>
    </div>
  );
}

export default TeamsDisplay;
