// NavBar Component
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../IMG/ssj_badge-removebg-preview.png";
import "./NavBar.css";
import { FaBars, FaChevronDown } from "react-icons/fa";

function NavBar() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [burgerClass, setBurgerClass] = useState(<FaBars />);

  // Open Menu
  const openBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
    setBurgerClass(<FaChevronDown />);
  };

  // Close Menu
  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
    setBurgerClass(<FaBars />);
  };

  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link to={"/"} id="logo" onClick={closeBurgerMenu}>
          <img src={logo} alt="logo" className="logo"></img>
        </Link>

        {/* Burger Menu */}
        <div className="burgerMenuBtn" onClick={openBurgerMenu}>
          {burgerClass}
        </div>

        <div className={`navLinks ${burgerMenuOpen ? "open" : ""}`}>
          <ul className="list">
            <li className="listItem">
              <Link to={"/teamDisplay"} onClick={closeBurgerMenu}>
                Team Info
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
              <Link to={"/events"} onClick={closeBurgerMenu}>
                Get Involved
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
