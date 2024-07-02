// Events Component

import "./GetInvolved.css";
import { useSpring, animated } from "react-spring";
// import EventsContainer from "../../SmallComponents/EventsContainer/EventsContainer";

function Events({ id }) {
  // Animations

  // Header
  const header = useSpring({
    from: { x: 1500 },
    to: { x: 0 },
    delay: 500,
  });

  // Fixture
  // const fixture = useSpring({
  //   from: { x: -1500 },
  //   to: { x: 0 },
  //   delay: 300,
  // });

  // Object
  const object = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
    delay: 250,
  });

  // Events
  const event = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: { duration: "1500" },
  });

  return (
    <div id={id} className="events">
      <animated.div
        className="homepageObject eventsObject"
        style={{ ...object, transform: "rotate(-60deg)" }}
      ></animated.div>
      <animated.h3 style={{ ...header }}>Get Involved</animated.h3>
      {/* <animated.p className="eventsSubHeader" style={{ ...fixture }}>
        Fixtures
      </animated.p> */}
      <animated.div className="eventList" style={{ ...event }}></animated.div>
    </div>
  );
}

export default Events;
