// NavBar Component
import { Link } from "react-router-dom";
import logo from "../../../IMG/ssj_badge-removebg-preview.png";
import "./NavBar.css";

function NavBar() {
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
              Teams
              {/* <ul className="dropdownTeams">
                <li>Team 1</li>
                <li>Team 2</li>
                <li>Team 3</li>
              </ul> */}
            </li>
            <li className="listItem">Sponsors</li>
            <li className="listItem">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
