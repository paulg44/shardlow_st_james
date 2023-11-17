// NavBar Component
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../IMG/ssj_badge-removebg-preview.png";
import "./NavBar.css";
import { FaTshirt } from "react-icons/fa";

function NavBar({ handleTeamClick, teamsData }) {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  // Open Menu
  const openBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  // Close Menu
  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link to={"/"} id="logo" onClick={closeBurgerMenu}>
          <img src={logo} alt="logo" className="logo"></img>
        </Link>

        {/* Burger Menu */}
        <div className="burgerMenuBtn" onClick={openBurgerMenu}>
          <FaTshirt />
        </div>

        <div className={`navLinks ${burgerMenuOpen ? "open" : ""}`}>
          <ul className="list">
            <li className="listItem">
              <Link to={"/events"} onClick={closeBurgerMenu}>
                Events
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
            <li className="listItem dropdown">
              <Link to={"/teams"}>Teams</Link>
              <ul className="dropdownList">
                {teamsData.map((team, index) => (
                  <li
                    key={index}
                    onClick={() => handleTeamClick(team.teamName)}
                  >
                    <Link
                      to={`/teams/${team.teamName}`}
                      onClick={closeBurgerMenu}
                    >
                      {team.teamName}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
