// Teams Component

import "./Teams.css";

function Teams({
  teamName,
  latestResult,
  nextFixture,
  table,
  faLink,
  isActive,
}) {
  return (
    <div className="teams">
      <h4>{teamName}</h4>
      {/* All of these will be fetched from the fa full time website */}
      <p>Latest Result: {latestResult}</p>
      <p>Next Fixture: {nextFixture}</p>
      <p>Table: {table}</p>
      <a href={faLink} target="_blank" rel="noreferrer">
        Link to FA fulltime
      </a>
    </div>
  );
}

export default Teams;
