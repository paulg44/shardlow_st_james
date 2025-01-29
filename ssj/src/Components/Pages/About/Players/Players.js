import "./Players.css";
// import playerData from "../../../../assets/utils/players.json";
// import { useSpring, animated } from "react-spring";
import userImage from "../../../../assets/IMG/blank-profile-picture-973460_1280.png";

function Players({ team }) {
  // Animation
  // const fadeIn = useSpring({
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   config: { duration: "1000" },
  //   delay: 150,
  // });

  return (
    // Shield Style
    // <animated.div className="players" style={{ ...fadeIn }}>
    //   {playerData.players[team]?.map((player) => (
    //     <div key={player.id} className="playerCard">
    //       <div className="shine"></div>
    //       <h3>{player.name}</h3>
    //       <img src={player.image} alt="player" />
    //       <p>{player.age}</p>
    //       <p>{player.position}</p>
    //     </div>
    //   ))}
    // </animated.div>

    // Standard Style
    <div className="standardPlayers">
      <div className="nameNumber">
        <p>11</p>
        <h3>Paul Garton</h3>
        <div className="playerImage">
          <img src={userImage} alt="profile" />
        </div>
      </div>
      <div className="personalStats">
        <p>Position: Full-Back</p>
        <p>Age: 40</p>
      </div>
      <div className="footballStats">
        <p>Appearances: 22</p>
        <p>Goals: 4</p>
        <p>Assists: 1</p>
      </div>
    </div>
  );
}

export default Players;
