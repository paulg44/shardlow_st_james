// Teams Component

import "./Teams.css";
// import Table from "./Table";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import homepageImg from "../../../../IMG/ssj_1.jpg";

function Teams({
  teamName,
  homeScore,
  awayScore,
  awayTeam,
  nextFixture,
  isActive,
  lrcode,
  resultDate,
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

  // Animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: "1500" },
    delay: 250,
  });

  return (
    <animated.div
      className={`team ${isActive ? "active" : ""}`}
      style={{ ...fadeIn }}
    >
      <div className="table">
        <h3>Shardlow {teamName}</h3>
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
            {awayScore}
          </p>
        </div>
        <p className="fixture">
          Next <Link to={"/events"}>Fixture</Link>: {nextFixture}
        </p>
      </div>
    </animated.div>
  );
}

export default Teams;
