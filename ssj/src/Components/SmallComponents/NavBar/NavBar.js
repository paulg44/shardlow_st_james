// NavBar Component
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../IMG/ssj_badge-removebg-preview.png";
import "./NavBar.css";
import { FaBars } from "react-icons/fa";

function NavBar({ handleTeamClick, teamsData }) {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [navSelectedTeam, setNavSelectedTeam] = useState("");

  // Open Menu
  const openBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  // Close Menu
  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  function navSelectTeam(e) {
    const navSelectedValue = e.target.value;
    setNavSelectedTeam(navSelectedValue);
  }

  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link to={"/"} id="logo" onClick={closeBurgerMenu}>
          <img src={logo} alt="logo" className="logo"></img>
        </Link>

        {/* Burger Menu */}
        <div className="burgerMenuBtn" onClick={openBurgerMenu}>
          <FaBars />
        </div>

        <div className={`navLinks ${burgerMenuOpen ? "open" : ""}`}>
          <ul className="list">
            <li className="listItem">
              <Link to={"/events"} onClick={closeBurgerMenu}>
                Get Involved
              </Link>
            </li>
            <li className="listItem">
              <Link to={"/news"} onClick={closeBurgerMenu}>
                News
              </Link>
            </li>
            <li className="listItem">
              <Link to={"/shop"} onClick={closeBurgerMenu}>
                Shop
              </Link>
            </li>
            <li className="listItem">
              <Link to={"/sponsors"} onClick={closeBurgerMenu}>
                Sponsors
              </Link>
            </li>
            <li className="listItem">
              <Link to={"/contact"} onClick={closeBurgerMenu}>
                Contact
              </Link>
            </li>
            <li className="listItem dropdown">
              <label htmlFor="teams">Select a Team</label>
              <select
                name="teams"
                value={navSelectedTeam}
                onChange={navSelectTeam}
                onClick={() => handleTeamClick(navSelectedTeam)}
              >
                <option></option>{" "}
                {teamsData.map((teamsData, id) => (
                  <option key={id}>{teamsData.teamName}</option>
                ))}
              </select>
              <Link to={`/teams/${navSelectedTeam}/table`}>Table</Link>
              <Link to={`/teams/${navSelectedTeam}/results`}>
                Results/Fixtures
              </Link>
              <Link>Players</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
