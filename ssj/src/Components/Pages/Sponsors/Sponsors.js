// Sponsors Component

import "./Sponsors.css";
import foremostImg from "../../../IMG/foremost-removebg-preview.png";
import howdenImg from "../../../IMG/howdens_ssj.png";
import electricImg from "../../../IMG/electric_center_ssj-removebg-preview.png";
import clockImg from "../../../IMG/clock_ssj-removebg-preview.png";
import SponsorsContainer from "./SponsorsContainer/SponsorsContainer";

function Sponsors() {
  return (
    <div className="sponsors">
      <div className="homepageObject sponsorsObject"></div>
      <h3>Proudly Sponsored By...</h3>
      <div className="sponsorsList">
        <SponsorsContainer
          sponsorLinkURL="https://foremost-security.co.uk/"
          sponsorIMG={foremostImg}
          sponsorIMGAlt="foremost image"
        />
        <SponsorsContainer
          sponsorLinkURL="https://www.howdens.com/"
          sponsorIMG={howdenImg}
          sponsorIMGAlt="howden image"
        />
        <SponsorsContainer
          sponsorLinkURL="https://www.clockwarehousepub.co.uk/"
          sponsorIMG={clockImg}
          sponsorIMGAlt="clockwarehouse image"
        />
        <SponsorsContainer
          sponsorLinkURL="https://www.electric-center.co.uk/"
          sponsorIMG={electricImg}
          sponsorIMGAlt="electric centre image"
        />
      </div>
    </div>
  );
}

export default Sponsors;
