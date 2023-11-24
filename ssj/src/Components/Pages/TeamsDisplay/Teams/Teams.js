// Teams Component

import "./Teams.css";
// import Table from "./Table";
import { useEffect } from "react";

function Teams({
  teamName,
  latestResult,
  awayTeam,
  nextFixture,
  isActive,
  lrcode,
}) {
  useEffect(() => {
    // This code will be executed after the component is mounted
    const script = document.createElement("script");
    script.language = "javascript";
    script.type = "text/javascript";
    script.text = `var lrcode = "${lrcode}";`;

    const csScript = document.createElement("script");
    csScript.language = "Javascript";
    csScript.type = "text/javascript";
    csScript.src = "https://fulltime.thefa.com/client/api/cs1.js";

    document.getElementById(`lrep${lrcode}`).appendChild(script);
    document.body.appendChild(csScript);
  }, [lrcode]);
  return (
    <div className={`team ${isActive ? "active" : ""}`}>
      <div className="table">
        <h3>{teamName}</h3>
        {/* Table */}
        <div id={`lrep${lrcode}`} style={{ width: "350px" }}>
          Data loading....
          <a href="https://fulltime.thefa.com/index.html?divisionseason=88093185">
            click here for Two
          </a>
          <br />
          <br />
          <a href="http://www.thefa.com/FULL-TIME">FULL-TIME Home</a>
        </div>
      </div>
      <div className="resultFixtures">
        <p>Full Time</p>
        <p className="result">
          Shardlow {teamName}
          <span className="latestResult">{latestResult}</span> {awayTeam}
        </p>
        <p className="fixture">Next Fixture: {nextFixture}</p>
      </div>
    </div>
  );
}

export default Teams;
