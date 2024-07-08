// Teams Component

/*## ISSUE WITH RENDERING BOTH TABLE AND RESULTS AT SAME TIME */

import "./ResultsFixtures.css";
// import Table from "./Table";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
// import homepageImg from "../../../../IMG/ssj_1.jpg";

function ResultsFixtures({ activeTeam }) {
  // For Results
  useEffect(() => {
    // This code will be executed after the component is mounted

    const resultsScript = document.createElement("script");
    resultsScript.language = "javascript";
    resultsScript.type = "text/javascript";
    resultsScript.text = `var lrcode = "${activeTeam.lrcodeResults}";`;

    const resultsCsScripts = document.createElement("script");
    resultsCsScripts.language = "Javascript";
    resultsCsScripts.type = "text/javascript";
    resultsCsScripts.src = "https://fulltime.thefa.com/client/api/cs1.js";

    document
      .getElementById(`lrep${activeTeam.lrcodeResults}`)
      .appendChild(resultsScript);
    document.body.appendChild(resultsCsScripts);
  }, [activeTeam.lrcodeResults]);

  // Animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: "1500" },
    delay: 250,
  });

  return (
    <animated.div
      // className={`team ${isActive ? "active" : ""}`}
      style={{ ...fadeIn }}
    >
      <div className="faResults">
        <h3>Results for {activeTeam.teamName}</h3>
        {/* Table */}~
        <div id={`lrep${activeTeam.lrcodeResults}`} style={{ width: "550px" }}>
          Data Loading....
          <a href="null">Click here for null</a>
        </div>
      </div>
    </animated.div>
  );
}

export default ResultsFixtures;
