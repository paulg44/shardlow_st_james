// Main Admin Control Panel Page
import "./ControlPanel.css";
import { Form } from "react-bootstrap";

function AdminControlPanel() {
  const firstTeams = ["shardlow", "derby", "milan"];
  const U15sTeams = ["shardlow", "forest", "leeds"];
  const vetsTeams = ["shardlow", "donnington", "magpies"];

  // Map through array
  // firstTeams.forEach((team) => {
  //   option.push(team)
  // });

  return (
    <div className="controlPanel">
      <h2>Admin Control Panel</h2>
      <div className="addResult">
        <p>Add a result to database</p>
        <Form>
          <Form.Group controlId="pickTeam">
            <Form.Label>Pick Team</Form.Label>
            <Form.Select aria-label="Select Team">
              {/* Once I've picked a team can I then pick the home and away teams fromm a specific array? */}
              <option></option>
              <option value="Shardlow St James">Shardlow St James</option>
              <option value="Shardlow U15's">Shardlow U15's</option>
              <option value="Shardlow Vets">Shardlow Vets</option>
            </Form.Select>
          </Form.Group>

          {/* Home Team */}
          <Form.Group controlId="homeTeam">
            <Form.Label>Home Team</Form.Label>
            <Form.Select aria-label="Home Team">
              {firstTeams.map((team) => (
                <option key={team.id}>{team}</option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* Away Team */}
          <Form.Group controlId="awayTeam">
            <Form.Label>Home Team</Form.Label>
            <Form.Select aria-label="Away Team">
              {firstTeams.map((team) => (
                <option key={team.id}>{team}</option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* Home Goals */}
          <Form.Group controlId="homeGoals">
            <Form.Label>Home Goals</Form.Label>
            <Form.Select aria-label="Home Goals">
              <Form.Control
                type="input"
                id="homeGoals"
                name="homeGoals"
                min="0"
                max="99"
              />
            </Form.Select>
          </Form.Group>
          {/* Away Team */}
          <Form.Group controlId="awayTeam">
            <Form.Label>Home Team</Form.Label>
            <Form.Select aria-label="Away Team">
              {firstTeams.map((team) => (
                <option key={team.id}>{team}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default AdminControlPanel;
