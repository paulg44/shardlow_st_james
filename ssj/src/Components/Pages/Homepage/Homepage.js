// Homepage Component
import "./Homepage.css";
import { useSpring, animated } from "react-spring";

function Homepage({ homepageImg }) {
  // Object slide in
  const object = useSpring({
    from: { y: -1000 },
    to: { y: 0 },
    delay: 250,
  });

  // Header
  const header = useSpring({
    from: { x: 1500 },
    to: { x: 0 },
    delay: 500,
  });

  // About
  const about = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
    delay: 750,
  });

  return (
    <div className="homepage">
      <animated.div
        className="homepageObject"
        style={{ ...object, transform: "rotate(10deg)" }}
      ></animated.div>
      <div
        className="backgroundImage"
        style={{
          background: `url(${homepageImg}) no-repeat center center/cover`,
        }}
      ></div>
      <div className="homepageWrapper">
        <animated.div className="homepageHeader" style={{ ...header }}>
          <p>Welcome to</p>
          <h1>Shardlow St James FC</h1>
        </animated.div>
        <animated.div className="about" style={{ ...about }}>
          <h2>About Us</h2>
          <p className="aboutDesc">
            Shardlow St James F.C is a Sunday morning football team that play in
            the Long Eaton Sunday League. We are one of the oldest amateur
            football teams in the country and play our games at The Wharf,
            Shardlow, Derbyshire.
          </p>
        </animated.div>
      </div>
    </div>
  );
}

export default Homepage;
