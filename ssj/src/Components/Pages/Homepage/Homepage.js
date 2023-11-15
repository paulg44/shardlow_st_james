// Homepage Component
import "./Homepage.css";
import { useSpring, animated } from "react-spring";

function Homepage({ homepageImg }) {
  // Spring test
  const springs = useSpring({
    from: { y: -1000 },
    to: { y: 0 },
  });

  return (
    <div className="homepage">
      <animated.div
        className="homepageObject"
        style={{ ...springs }}
      ></animated.div>
      <div
        className="backgroundImage"
        style={{
          background: `url(${homepageImg}) no-repeat center center/cover`,
        }}
      ></div>
      <div className="homepageWrapper">
        <div className="homepageHeader">
          <p>Welcome to</p>
          <h1>Shardlow St James FC</h1>
        </div>
        <div className="about">
          <h2>About Us</h2>
          <p className="aboutDesc">
            Shardlow St James F.C is a Sunday morning football team that play in
            the Long Eaton Sunday League. We are one of the oldest amateur
            football teams in the country and play our games at The Wharf,
            Shardlow, Derbyshire.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
