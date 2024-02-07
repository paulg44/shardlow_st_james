// Events Component

import "./Events.css";
import { useSpring, animated } from "react-spring";
import EventsContainer from "../../SmallComponents/EventsContainer/EventsContainer";

function Events({ id }) {
  // Animations

  // Header
  const header = useSpring({
    from: { x: 1500 },
    to: { x: 0 },
    delay: 500,
  });

  // Fixture
  const fixture = useSpring({
    from: { x: -1500 },
    to: { x: 0 },
    delay: 300,
  });

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
      <animated.h3 style={{ ...header }}>Upcoming Events</animated.h3>
      <animated.p className="eventsSubHeader" style={{ ...fixture }}>
        Fixtures
      </animated.p>
      <animated.div className="eventList" style={{ ...event }}>
        <EventsContainer
          eventTitle="Shardlow St James"
          eventDate="03/12/2023"
          eventDesc="League match against FC Erewash"
          eventLocation="Shardlow, the Wharf. KO - 10:30"
        />
        <EventsContainer
          eventTitle="SSJ U15's"
          eventDate="10/2/2023"
          eventDesc="League match against Collingham Cougars U15"
          eventLocation="Shardlow, the Wharf. KO - 10:30"
        />
        <EventsContainer
          eventTitle="SSJ Veterans"
          eventDate="11/2/2023"
          eventDesc="League match against Cromford Vets Vets"
          eventLocation="Shardlow, the Wharf KO - 14:00"
        />
      </animated.div>
    </div>
  );
}

export default Events;
