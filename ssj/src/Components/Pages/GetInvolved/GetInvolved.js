// Events Component

import { Link } from "react-router-dom";
import "./GetInvolved.css";
import { useSpring, animated } from "react-spring";

function GetInvolved({ id }) {
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

      <div className="getInvolvedKids">
        <h3>Kids Sessions</h3>
        {/* Image Here */}
        <div className="listsContainer">
          <div className="services">
            <h4>Fun football sessions on a Saturday morning</h4>
            <h5>Ran by Shardlow St James coaches</h5>
            <ul className="border">
              <li>Unisex Sessions</li>
              <li>Ages between 5 and 10</li>
              <li>Fun games with drills</li>
              <li>Working on football skills and other skills</li>
              <li>Sessions in a fun safe environment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="getInvolvedVolunteer">
        <h3>Volunteers Needed</h3>
        <div className="listsContainer">
          <div className="opportunitiesContainer">
            <h4>Opportunities</h4>
            <ul className="border">
              <li>Coaches</li>
              <li>Players</li>
              <li>Committee Members</li>
              <li>Volunteers</li>
              <li>Sponsors</li>
            </ul>
          </div>
          <div className="teamsContainer">
            <h4>Teams</h4>
            <ul>
              <li>Mens 1st Team</li>
              <li>Mens Reserve Team</li>
              <li>Mens Vets Team</li>
              <li>Under 16's Team</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="getInvolvedSponsor">
        <h3>Advertise Your Business</h3>
        {/* Image Here */}
        <div className="listsContainer">
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
          <div className="teamsContainer">
            <h4>Costs</h4>
            <ul>
              <li>Double sided billboard</li>
              <li>1 year - £350</li>
              <li>2 years - £500</li>
              <li>3 years - £600</li>
              <li>Sponsor player, kits, social media posts</li>
            </ul>
          </div>
        </div>
      </div>

      <Link to={"/contact"}>Contact for more details.</Link>
    </div>
  );
}

export default GetInvolved;
