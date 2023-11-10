// Sponsors Container Component

import "./SponsorsContainer.css";

function SponsorsContainer(props) {
  return (
    <div className="sponsor">
      <a href={props.sponsorLinkURL} target="_blank" rel="noreferrer">
        <img src={props.sponsorIMG} alt={props.sponsorIMGAlt}></img>
      </a>
    </div>
  );
}

export default SponsorsContainer;
