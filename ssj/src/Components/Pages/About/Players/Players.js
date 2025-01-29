import "./Players.css";
import playerData from "../../../../assets/utils/players.json";
import { useSpring, animated } from "react-spring";

function Players() {
  // Animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: "1000" },
    delay: 150,
  });

  console.log("active team on player page:");
  console.log("player data:", playerData.players["SSJ Sunday"]);
  console.log("player data.player[activeTeam]:", playerData.players);
  return (
    <animated.div className="players" style={{ ...fadeIn }}>
      {playerData.players["SSJ Sunday"]?.map((player) => (
        <div key={player.id} className="playerCard">
          <div className="shine"></div>
          <h2>{player.name}</h2>
          <img src={player.image} alt="player" />
          <p>{player.age}</p>
          <p>{player.position}</p>
          <p>{player.random}</p>
        </div>
      ))}
    </animated.div>
  );
}

export default Players;
