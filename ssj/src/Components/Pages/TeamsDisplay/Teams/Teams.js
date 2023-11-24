// Teams Component

import "./Teams.css";
// import Table from "./Table";
import { useEffect } from "react";

function Teams({ teamName, latestResult, nextFixture, isActive, lrcode }) {
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
      <h4>{teamName}</h4>
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
      {/* All of these will be fetched from the fa full time website */}
      <p>Latest Result: {latestResult}</p>
      <p>Next Fixture: {nextFixture}</p>
    </div>
  );
}

export default Teams;
