// Sponsors Container Component

import "./SponsorsContainer.css";

function SponsorsContainer(props) {
  return (
    <div className="sponsor">
      <img src={props.sponsorIMG} alt={props.sponsorIMGAlt}></img>
      <a href={props.sponsorLink} target="_blank" rel="noreferrer">
        Link
      </a>
    </div>
  );
}

export default SponsorsContainer;
