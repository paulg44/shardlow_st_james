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
      <div className="playerInfo">
        <div className="nameNumber">
          <h3>
            <span>11</span>Paul Garton
          </h3>
          <div className="playerImage">
            <img src={userImage} alt="profile" />
          </div>
        </div>
        <div className="personalStats">
          <p>Position: Full-Back</p>
          <p>Age: 40</p>
        </div>
      </div>
      <div className="playerStats">
        <p>
          <span>Appearances</span> 22
        </p>
        <p>
          <span>Goals</span> 4
        </p>
        <p>
          <span>Assists</span> 1
        </p>
      </div>
    </div>
  );
}

export default Players;
