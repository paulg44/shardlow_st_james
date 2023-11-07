// Homepage Component
import "./Homepage.css";
import Events from "../Events/Events";
import News from "../News/News";

function Homepage({ homepageImg }) {
  return (
    <div className="homepage">
      <div className="homepageObject"></div>
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
      <Events id="events" />
      <News />
    </div>
  );
}

export default Homepage;
