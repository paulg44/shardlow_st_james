// Events Component

import { Link } from "react-router-dom";
import "./GetInvolved.css";
import { useSpring, animated } from "react-spring";
// import EventsContainer from "../../SmallComponents/EventsContainer/EventsContainer";

function Events({ id }) {
  // Animations

  // Header
  const header = useSpring({
    from: { x: 1500 },
    to: { x: 0 },
    delay: 500,
  });

  // Fixture
  // const fixture = useSpring({
  //   from: { x: -1500 },
  //   to: { x: 0 },
  //   delay: 300,
  // });

  // Object
  const object = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
    delay: 250,
  });

  // Events
  // const event = useSpring({
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   delay: 1000,
  //   config: { duration: "1500" },
  // });

  return (
    <div id={id} className="getInvolved">
      <animated.div
        className="homepageObject getInvolvedObject"
        style={{ ...object, transform: "rotate(-60deg)" }}
      ></animated.div>
      <animated.h2 style={{ ...header }}>Get Involved</animated.h2>
      <div className="getInvolvedVolunteer">
        <h3>Volunteers Needed</h3>
        <div className="opportunities">
          <h4>Opportunities</h4>
          <ul>
            <li>Coaches</li>
            <li>Players</li>
            <li>Committee Members</li>
            <li>Volunteers</li>
            <li>Sponsors</li>
          </ul>
        </div>
        <div className="Teams">
          <h4>Teams</h4>
          <ul>
            <li>Mens 1st Team</li>
            <li>Mens Reserve Team</li>
            <li>Mens Vets Team</li>
            <li>Under 16's Team</li>
          </ul>
        </div>
      </div>

      <div className="getInvolvedSponsor">
        <h3>Advertise Your Business</h3>
        {/* Image Here */}
        <div className="services">
          <h4>Our Services</h4>
          <ul>
            <li>Billboard at every home game</li>
            <li>Saturday Morning</li>
            <li>Sunday Morning & Afternoon</li>
            <li>Social Media Posts</li>
            <li>40+ Home Games</li>
          </ul>
        </div>
        <div className="Teams">
          <h4>Costs</h4>
          <ul>
            <li>Double sided billboard</li>
            <li>1 year - £350</li>
            <li>2 years - £500</li>
            <li>3 years - £600</li>
            <li>
              Sponsor player, kits, social media posts (contact for more
              details)
            </li>
          </ul>
        </div>
      </div>

      <Link to={"/contact"}>Contact</Link>
    </div>
  );
}

export default Events;
