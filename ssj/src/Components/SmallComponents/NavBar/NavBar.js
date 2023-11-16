// NavBar Component
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../IMG/ssj_badge-removebg-preview.png";
import "./NavBar.css";
import { FaTshirt } from "react-icons/fa";

function NavBar({ handleTeamClick, teamsData }) {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    if (!burgerMenuOpen) {
      setBurgerMenuOpen(burgerMenuOpen);
    } else {
      setBurgerMenuOpen(!burgerMenuOpen);
    }
  };

  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link to={"/"} id="logo">
          <img src={logo} alt="logo" className="logo"></img>
        </Link>

        {/* Burger Menu */}
        <div className="burgerMenuBtn" onClick={toggleBurgerMenu}>
          <FaTshirt />
        </div>

        <div className={`navLinks ${burgerMenuOpen ? "open" : ""}`}>
          <ul className="list">
            <li className="listItem">
              <Link to={"/events"} onClick={toggleBurgerMenu}>
                Events
              </Link>
            </li>
            <li className="listItem">
              <Link to={"/news"} onClick={toggleBurgerMenu}>
                News
              </Link>
            </li>
            <li className="listItem dropdown">
              <Link to={"/teams"} onClick={toggleBurgerMenu}>
                Teams
              </Link>
              <ul className="dropdownList">
                {teamsData.map((team, index) => (
                  <li
                    key={index}
                    onClick={() => handleTeamClick(team.teamName)}
                  >
                    <Link
                      to={`/teams/${team.teamName}`}
                      onClick={toggleBurgerMenu}
                    >
                      {team.teamName}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="listItem">
              <Link to={"/sponsors"} onClick={toggleBurgerMenu}>
                Sponsors
              </Link>
            </li>
            <li className="listItem">
              <Link to={"/contact"} onClick={toggleBurgerMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
