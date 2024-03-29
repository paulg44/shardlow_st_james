// Component to add results on admin panel
import { Form, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import "./AddResult.css";

function AddResultAdmin() {
  const selectATeam = [
    { id: 4, name: "Shardlow St James" },
    { id: 5, name: "Shardlow U15's" },
    { id: 6, name: "Shardlow Vets" },
  ];

  // Teams Objects
  const firstTeams = [
    { id: 1, name: "Shardlow St James" },
    { id: 2, name: "Derby County" },
    { id: 3, name: "Aresnal" },
  ];
  const U15sTeams = [
    { id: 1, name: "Shardlow U15's" },
    { id: 2, name: "Inter Milan" },
    { id: 3, name: "Real Madrid" },
  ];
  const vetsTeams = [
    { id: 1, name: "Shardlow Vets" },
    { id: 2, name: "Barcelona" },
    { id: 3, name: "PSG" },
  ];

  // States
  const [selectedTeam, setSelectedTeam] = useState("");
  const [teamList, setTeamList] = useState([]);
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [show, setShow] = useState(false);

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

  // Handle Home Team
  function handleHomeTeam(e) {
    e.preventDefault();
    setHomeTeam(e.target.value);
    console.log(homeTeam);
  }

  // Handle Away Team
  function handleAwayTeam(e) {
    e.preventDefault();
    setAwayTeam(e.target.value);
    console.log(awayTeam);
  }

  // Handle Home Goals
  function handleHomeScore(e) {
    e.preventDefault();
    setHomeScore(e.target.value);
    console.log(homeScore);
  }

  // Handle Away Goals
  function handleAwayScore(e) {
    e.preventDefault();
    setAwayScore(e.target.value);
    console.log(awayScore);
  }

  // Handle add result to database
  async function handleAddResult(e) {
    e.preventDefault();

    // This variable makes the team selection data dynamic so I can add to different tables
    const teamData = {
      selectedTeam: selectedTeam,
      home_team: homeTeam,
      away_team: awayTeam,
      home_score: homeScore,
      away_score: awayScore,
    };

    await fetch("/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamData),
    });

    // Make pop up visible
    setShow(true);
    // Rest values
    setSelectedTeam("");
    setHomeTeam("");
    setAwayScore("");
    setHomeScore(0);
    setAwayScore(0);
  }

  function handleModalClose() {
    setShow(false);
  }

  return (
    <div className="controlPanel">
      <h1>Admin Panel</h1>
      {/* Add Result to Database */}
      <div className="addResult">
        <Form onSubmit={handleAddResult} role="form">
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
              {selectATeam.map((team) => (
                <option key={team.id}>{team.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <p>Add a result to database</p>

          {/* Home Team */}
          <Form.Group controlId="homeTeam">
            <Form.Label>Home Team</Form.Label>
            <Form.Select aria-label="Home Team" onChange={handleHomeTeam}>
              <option></option>
              {teamList.map((team) => (
                <option key={team.id}>{team.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* Away Team */}
          <Form.Group controlId="awayTeam">
            <Form.Label>Away Team</Form.Label>
            <Form.Select aria-label="Away Team" onChange={handleAwayTeam}>
              <option></option>
              {teamList.map((team) => (
                <option key={team.id}>{team.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* Home Goals */}
          <Form.Group controlId="homeGoals">
            <Form.Label>Home Goals</Form.Label>

            <Form.Control
              onChange={handleHomeScore}
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
              onChange={handleAwayScore}
              type="number"
              // id="awayGoals"
              name="awayGoals"
              min="0"
              max="99"
            />
          </Form.Group>
          <button type="submit">Add Result</button>
        </Form>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleModalClose}
          style={{ position: "absolute", top: "150px", left: "100px" }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Result added to {selectedTeam} Database</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default AddResultAdmin;
