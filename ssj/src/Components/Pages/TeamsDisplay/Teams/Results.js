import { useEffect } from "react";

function Results() {
  useEffect(() => {
    // This code will be executed after the component is mounted
    const script = document.createElement("script");
    script.language = "javascript";
    script.type = "text/javascript";
    script.text = 'var lrcode = "441578546";';

    const csScript = document.createElement("script");
    csScript.language = "Javascript";
    csScript.type = "text/javascript";
    csScript.src = "https://fulltime.thefa.com/client/api/cs1.js";

    document.getElementById("lrep441578546").appendChild(script);
    document.body.appendChild(csScript);
  }, []);

  return (
    <div id="lrep441578546" style={{ width: "350px" }}>
      Data loading....
      <a href="https://fulltime.thefa.com/index.html?divisionseason=88093185">
        click here for Two
      </a>
      <br />
      <br />
      <a href="http://www.thefa.com/FULL-TIME">FULL-TIME Home</a>
    </div>
  );
}

export default Results;
