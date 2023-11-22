// Teams Component

import "./Teams.css";
import Table from "./Table";

function Teams({
  teamName,
  latestResult,
  nextFixture,
  table,
  faLink,
  isActive,
}) {
  return (
    <div className={`team ${isActive ? "active" : ""}`}>
      <h4>{teamName}</h4>
      <Table />
      {/* All of these will be fetched from the fa full time website */}
      <p>Latest Result: {latestResult}</p>
      <p>Next Fixture: {nextFixture}</p>
      <a href={faLink} target="_blank" rel="noreferrer">
        Link to FA fulltime
      </a>
    </div>
  );
}

export default Teams;
