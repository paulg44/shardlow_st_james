// Teams Component

/*## ISSUE WITH RENDERING BOTH TABLE AND RESULTS AT SAME TIME */

import "./Teams.css";
// import Table from "./Table";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
// import homepageImg from "../../../../IMG/ssj_1.jpg";

function Teams({
  teamName,
  homeScore,
  awayScore,
  awayTeam,
  nextFixture,
  isActive,
  lrcodeTable,
  lrcodeResults,
  resultDate,
}) {
  // For Table
  useEffect(() => {
    // This code will be executed after the component is mounted

    const tabelScript = document.createElement("script");
    tabelScript.language = "javascript";
    tabelScript.type = "text/javascript";
    tabelScript.text = `var lrcode = "${lrcodeTable}";`;

    const tableCsScript = document.createElement("script");
    tableCsScript.language = "Javascript";
    tableCsScript.type = "text/javascript";
    tableCsScript.src = "https://fulltime.thefa.com/client/api/cs1.js";

    document.getElementById(`lrep${lrcodeTable}`).appendChild(tabelScript);
    document.body.appendChild(tableCsScript);
  }, [lrcodeTable]);

  // For Results
  useEffect(() => {
    // This code will be executed after the component is mounted

    const resultsScript = document.createElement("script");
    resultsScript.language = "javascript";
    resultsScript.type = "text/javascript";
    resultsScript.text = `var lrcode = "${lrcodeResults}";`;

    const resultsCsScripts = document.createElement("script");
    resultsCsScripts.language = "Javascript";
    resultsCsScripts.type = "text/javascript";
    resultsCsScripts.src = "https://fulltime.thefa.com/client/api/cs1.js";

    document.getElementById(`lrep${lrcodeResults}`).appendChild(resultsScript);
    document.body.appendChild(resultsCsScripts);
  }, [lrcodeResults]);

  // Animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: "1500" },
    delay: 250,
  });

  // Fireworks
  useEffect(() => {
    if (homeScore > awayScore) {
      // return runFireworks()
      console.log("home wins!! fireworks will run here");
    }
  });

  return (
    <animated.div
      className={`team ${isActive ? "active" : ""}`}
      style={{ ...fadeIn }}
    >
      <div className="table">
        <h3>Shardlow {teamName}</h3>
        {/* Table */}

        <div id={`lrep${lrcodeTable}`} style={{ width: "350px" }}>
          Data loading....
          <a href="https://fulltime.thefa.com/index.html?divisionseason=88093185">
            click here for Two
          </a>
          <br />
          <br />
          <a href="http://www.thefa.com/FULL-TIME">FULL-TIME Home</a>
        </div>
      </div>

      <div className="faResults">
        <h3>Results</h3>
        {/* Table */}~
        <div id={`lrep${lrcodeResults}`} style={{ width: "550px" }}>
          Data Loading....
          <a href="null">Click here for null</a>
        </div>
      </div>

      {/* <div className="resultFixtures">
        <p className="fullTime">Latest Result {resultDate}</p>
        <div className="resultsCard">
          <div
            className="backgroundImage teamBackground"
            style={{
              background: `url(${homepageImg}) no-repeat center center/cover`,
            }}
          ></div>
          <p className="home teamNames">
            {teamName} <br />
            {homeScore}
          </p>
          <p className="vs">VS</p>
          <p className="away teamNames">
            {awayTeam}
            <br />
            <span data-testid="away-score">{awayScore}</span>
          </p>
        </div>
        <p className="fixture">
          Next <Link to={"/events"}>Fixture</Link>: {nextFixture}
        </p>
      </div> */}
    </animated.div>
  );
}

export default Teams;
