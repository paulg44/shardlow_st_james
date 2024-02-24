// Main Admin Control Panel Page
import "./ControlPanel.css";
import { useState } from "react";
import TeamsAdminPanel from "../TeamsPanel/TeamsPanel";

function AdminControlPanel() {
  // Teams Arrays
  const firstTeams = ["shardlow", "derby", "milan"];
  const U15sTeams = ["shardlow", "forest", "leeds"];
  const vetsTeams = ["shardlow", "donnington", "magpies"];

  // States
  const [teamList, setTeamList] = useState("");

  // Function for which team is picked
  function pickTeam() {
    // If option value shardlow st james use first team as teams List, U15's = U15's and so on
    if ("pickTeam" === "Shardlow St James") {
      setTeamList(firstTeams);
    }
  }

  return (
    <div className="controlPanel">
      <h1>Admin Panel</h1>
      <button type="button">Shardlow St James</button>
      <button type="button">Shardlow U15's</button>
      <button type="button">Shardlow Vets</button>
      <TeamsAdminPanel />
    </div>
  );
}

export default AdminControlPanel;
