import "./Players.css";
import playerData from "../../../../players.json";

function Players({ activeTeam }) {
  console.log("active team on player page:", activeTeam);
  console.log("player data:", playerData);
  console.log(
    "player data.player[activeTeam]:",
    playerData.players[activeTeam]
  );
  return (
    <div className="players">
      {playerData.players[activeTeam.teamName]?.map((player) => (
        <div key={player.id} className="playerCard">
          <h2>{player.name}</h2>
          <img src={player.image} alt="player" />
          <p>{player.age}</p>
          <p>{player.position}</p>
          <p>{player.random}</p>
        </div>
      ))}
    </div>
  );
}

export default Players;
