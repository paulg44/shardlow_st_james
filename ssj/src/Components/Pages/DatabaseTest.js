// A small component for testing my database

import { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
import "./DatabaseTest.css";
import homepageImg from "../../IMG/ShardlowHome.webp";

function DatabaseTest() {
  // State
  const [latestResult, setLatestResult] = useState("");
  //   const [homeTeam, setHomeTeam] = useState("");

  // Retrieve latest result
  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const resultResponse = await fetch("/api/latestResult");
        const latestResult = await resultResponse.json();
        setLatestResult(latestResult);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchLatest();
  }, []);

  return (
    <div className="test">
      <h1>Test data</h1>

      {/* <Table className="table">
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Home Score</th>
            <th>Away Score</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(latestResult) &&
            latestResult.map((result) => (
              <tr>
                <td>{result.home_team}</td>
                <td>{result.away_team}</td>
                <td>{result.home_score}</td>
                <td>{result.away_score}</td>
              </tr>
            ))}
        </tbody>
      </Table> */}
      <div className="resultFixtures">
        <p className="fullTime">Latest Result</p>
        {latestResult.map((result) => (
          <div className="resultsCard">
            <div
              className="backgroundImage teamBackground"
              style={{
                background: `url(${homepageImg}) no-repeat center center/cover`,
              }}
            ></div>
            <p className="home teamNames">
              {result.home_team} <br />
              {result.home_score}
            </p>
            <p className="vs">VS</p>
            <p className="away teamNames">
              {result.away_team}
              <br />
              <span data-testid="away-score">{result.away_score}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DatabaseTest;
