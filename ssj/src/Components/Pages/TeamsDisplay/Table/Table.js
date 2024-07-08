import { useEffect } from "react";

function Table({ activeTeam }) {
  // For Table
  useEffect(() => {
    // This code will be executed after the component is mounted

    const tabelScript = document.createElement("script");
    tabelScript.language = "javascript";
    tabelScript.type = "text/javascript";
    tabelScript.text = `var lrcode = "${activeTeam.lrcodeTable}";`;

    const tableCsScript = document.createElement("script");
    tableCsScript.language = "Javascript";
    tableCsScript.type = "text/javascript";
    tableCsScript.src = "https://fulltime.thefa.com/client/api/cs1.js";

    document
      .getElementById(`lrep${activeTeam.lrcodeTable}`)
      .appendChild(tabelScript);
    document.body.appendChild(tableCsScript);
  }, [activeTeam.lrcodeTable]);
  return (
    <div className="table">
      <h3>Shardlow {activeTeam.teamName}</h3>
      {/* Table */}

      <div id={`lrep${activeTeam.lrcodeTable}`} style={{ width: "350px" }}>
        Data loading....
        <a href="https://fulltime.thefa.com/index.html?divisionseason=88093185">
          click here for Two
        </a>
        <br />
        <br />
        <a href="http://www.thefa.com/FULL-TIME">FULL-TIME Home</a>
      </div>
    </div>
  );
}

export default Table;
