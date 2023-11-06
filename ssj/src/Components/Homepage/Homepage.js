// Homepage Component
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepageWrapper">
        <div className="homepageHeader">
          <p>Welcome to</p>
          <h1>Shardlow St James FC</h1>
          <div className="about">
            <h2>About Us</h2>
            <p className="aboutDesc">
              Shardlow St James F.C is a Sunday morning football team that play
              in the Long Eaton Sunday League. We are one of the oldest amateur
              football teams in the country and play our games at The Wharf,
              Shardlow, Derbyshire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
