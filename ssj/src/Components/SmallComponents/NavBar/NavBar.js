// NavBar Component
import { Link } from "react-router-dom";
import logo from "../../../IMG/ssj_badge-removebg-preview.png";
import "./NavBar.css";

function NavBar({ onTeamClick, teamsData }) {
  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link to={"/"} id="logo">
          <img src={logo} alt="logo" className="logo"></img>
        </Link>
        <div className="navLinks">
          <ul className="list">
            <li className="listItem">
              <Link to={"/events"}>Events</Link>
            </li>
            <li className="listItem">
              <Link to={"/news"}>News</Link>
            </li>
            <li className="listItem dropdown">
              <Link to={"/teams"}>Teams</Link>
              <ul className="dropdownList">
                {/* <li>First Team</li>
                <li>Reserves</li>
                <li>Veterans</li>
                <li>U15</li>
              </ul> */}
                {teamsData.map((team, index) => (
                  <li key={index} onClick={() => onTeamClick(team.teamName)}>
                    <Link to={`/teams/${team.teamName}`}>{team.teamName}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="listItem">
              <Link to={"/sponsors"}>Sponsors</Link>
            </li>
            <li className="listItem">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
