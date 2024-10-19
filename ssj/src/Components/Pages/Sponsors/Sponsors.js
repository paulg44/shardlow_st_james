// Sponsors Component

import "../../../assets/css/Sponsors.css";
import { useSpring, animated } from "react-spring";
// Imported Images
import foremostImg from "../../../assets/IMG/foremost-removebg-preview.png";
import howdenImg from "../../../assets/IMG/howdens_ssj.png";
import electricImg from "../../../assets/IMG/electric_center_ssj-removebg-preview.png";
import clockImg from "../../../assets/IMG/clock_ssj-removebg-preview.png";
import SponsorsContainer from "./SponsorsContainer/SponsorsContainer";

function Sponsors() {
  // Animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: "1500" },
    delay: 250,
  });

  const header = useSpring({
    from: { y: 1500 },
    to: { y: 0 },
    delay: 500,
  });

  const object = useSpring({
    from: { y: -1000 },
    to: { y: 0 },
    delay: 250,
  });

  return (
    <div className="sponsors">
      <animated.div
        className="homepageObject sponsorsObject"
        style={{ ...object, transform: "rotate(200deg" }}
      ></animated.div>
      <animated.h3 style={{ ...header }}>Proudly Sponsored By...</animated.h3>
      <animated.div className="sponsorsList" style={{ ...fadeIn }}>
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
      </animated.div>
    </div>
  );
}

export default Sponsors;
