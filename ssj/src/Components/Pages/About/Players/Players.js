import "./Players.css";
import playerData from "../../../../assets/utils/players.json";
import { useSpring, animated } from "react-spring";

function Players({ team }) {
  // Animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: "1000" },
    delay: 150,
  });

  return (
    <animated.div className="players" style={{ ...fadeIn }}>
      {playerData.players[team]?.map((player) => (
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
