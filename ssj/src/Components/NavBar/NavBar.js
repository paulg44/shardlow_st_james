// NavBar Component

import logo from "../../IMG/ssj_badge-removebg-preview.png";
import "./NavBar.css";
import { useRef } from "react";

function NavBar() {
  const eventsRef = useRef(null);

  const scrollToEvents = () => {
    const navbarHeight = 80;
    const eventsPosition = eventsRef.current.offsetTop - navbarHeight;
    window.scrollTo({ top: eventsPosition, behavior: "smooth" });
  };
  return (
    <nav className="navbar">
      <div className="navContainer">
        <a href={"/"} id="logo">
          <img src={logo} alt="logo" className="logo"></img>
        </a>
        <div className="navLinks">
          <ul className="list">
            <li className="listItem">
              <a href="#events" onClick={scrollToEvents}>
                Events
              </a>
            </li>
            <li className="listItem">
              <a href="#news">News</a>
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
