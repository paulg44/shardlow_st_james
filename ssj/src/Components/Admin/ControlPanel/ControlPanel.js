// Main Admin Control Panel Page
import "./ControlPanel.css";
import { Form } from "react-bootstrap";
import { useState } from "react";

function AdminControlPanel() {
  // Teams Arrays
  const firstTeams = ["shardlow", "derby", "milan"];
  const U15sTeams = ["shardlow", "forest", "leeds"];
  const vetsTeams = ["shardlow", "donnington", "magpies"];

  // States
  const [selectedTeam, setSelectedTeam] = useState("");
  const [teamList, setTeamList] = useState([]);

  // Function for which team is picked
  function selectTeam(e) {
    const selectedValue = e.target.value;
    setSelectedTeam(selectedValue);
    //   // If option value shardlow st james use first team as teams List, U15's = U15's and so on
    if (selectedValue === "Shardlow St James") {
      setTeamList(firstTeams);
    } else if (selectedValue === "Shardlow U15's") {
      setTeamList(U15sTeams);
    } else if (selectedValue === "Shardlow Vets") {
      setTeamList(vetsTeams);
    }
  }

  // Add result btn function
  function handleAddResultBtn() {
    console.log("add result btn clicked");
  }

  return (
    <div className="controlPanel">
      <h1>Admin Panel</h1>
      {/* Add Result to Database */}
      <div className="addResult">
        <Form>
          <Form.Group controlId="pickTeam">
            <Form.Label>Pick Team</Form.Label>
            <Form.Select
              aria-label="Select Team"
              // id="firstSelect"
              value={selectedTeam}
              onChange={selectTeam}
            >
              {/* Once I've picked a team can I then pick the home and away teams from a specific array? */}
              <option></option>
              <option value="Shardlow St James">Shardlow St James</option>
              <option value="Shardlow U15's">Shardlow U15's</option>
              <option value="Shardlow Vets">Shardlow Vets</option>
            </Form.Select>
          </Form.Group>
          <p>Add a result to database</p>

          {/* Home Team */}
          <Form.Group controlId="homeTeam">
            <Form.Label>Home Team</Form.Label>
            <Form.Select aria-label="Home Team">
              {teamList.map((team) => (
                <option key={team.id}>{team}</option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* Away Team */}
          <Form.Group controlId="awayTeam">
            <Form.Label>Away Team</Form.Label>
            <Form.Select aria-label="Away Team">
              {teamList.map((team) => (
                <option key={team.id}>{team}</option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* Home Goals */}
          <Form.Group controlId="homeGoals">
            <Form.Label>Home Goals</Form.Label>

            <Form.Control
              type="number"
              // id="homeGoals"
              name="homeGoals"
              min="0"
              max="99"
            />
          </Form.Group>
          {/* Away Team */}
          <Form.Group controlId="awayGoals">
            <Form.Label>Away Goals</Form.Label>
            <Form.Control
              type="number"
              // id="awayGoals"
              name="awayGoals"
              min="0"
              max="99"
            />
          </Form.Group>
          <button type="submit" onClick={handleAddResultBtn}>
            Add Result
          </button>
        </Form>
      </div>

      {/* Add News */}
      <div className="addNews">
        <p>Add new article to news section. Placeholders:</p>
        <p>Title:</p>
        <p>IMG:</p>
        <p>Description:</p>
        <p>Date:</p>
      </div>
    </div>
  );
}

export default AdminControlPanel;
