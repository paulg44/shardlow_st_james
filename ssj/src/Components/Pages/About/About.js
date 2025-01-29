import { useState } from "react";
import "../../../assets/css/About.css";
import Players from "./Players/Players";

function About() {
  const [team, setTeam] = useState("");
  console.log(team);

  const teamsArray = ["SSJ Sunday", "SSJ U15's", "SSJ Veterans"];

  const handleTeamSelection = (e) => {
    setTeam(e.target.value);
    console.log(team);
  };
  return (
    <div className="about">
      <h2>About Us</h2>
      <div className="teamPicker">
        {teamsArray.map((item, index) => (
          <label key={index}>
            <input
              type="radio"
              name="items"
              value={item}
              checked={team === item}
              onChange={handleTeamSelection}
            />
            {item}
          </label>
        ))}
      </div>
      <Players team={team} />
    </div>
  );
}

export default About;
