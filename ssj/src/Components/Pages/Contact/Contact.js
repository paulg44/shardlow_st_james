// Contact Component

import "./Contact.css";
import { useSpring, animated } from "react-spring";
import ContactPerson from "./ContactPerson/ContactPerson";

function Contact() {
  // Animations
  // Header
  const header = useSpring({
    from: { x: -1500 },
    to: { x: 0 },
    delay: 300,
  });

  // Object
  const object = useSpring({
    from: { x: 1000 },
    to: { x: 0 },
    delay: 250,
  });

  // About

  // Contact Info
  const info = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: { duration: "1500" },
  });

  return (
    <div className="contact">
      <animated.div
        className="homepageObject contactObject"
        style={{ ...object, transform: " rotate(145deg)" }}
      ></animated.div>
      <animated.h3 style={{ ...header }}>Contact</animated.h3>
      <animated.div className="contactPersonsList" style={{ ...info }}>
        <animated.div className="contactInfoPage">
          <p>
            For opportunity's to get involved coaching, new teams, matchday
            information, sponsorship and more please contact me.
          </p>
        </animated.div>
        <ContactPerson
          contactName="Tom Mitchell"
          contactPosition="Chairman"
          contactNumber="07772841404"
          // contactEmail="mrChairman@ssj.com"
        />
        {/* <ContactPerson
          contactName="Tom Mitchell"
          contactPosition="Chairman"
          contactNumber="07809921354"
          contactEmail="mrChairman@ssj.com"
        />
        <ContactPerson
          contactName="Tom Mitchell"
          contactPosition="Chairman"
          contactNumber="07809921354"
          contactEmail="mrChairman@ssj.com"
        /> */}
      </animated.div>
    </div>
  );
}

export default Contact;
