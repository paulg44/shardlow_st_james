// Events Component

import "./Events.css";
import EventsContainer from "../../SmallComponents/EventsContainer/EventsContainer";

function Events({ id }) {
  return (
    <div id={id} className="events">
      <div className="homepageObject eventsObject"></div>
      <h3>Upcoming Events</h3>
      <p className="eventsSubHeader">Fixtures</p>
      <div className="eventList">
        <EventsContainer
          eventTitle="First"
          eventDate="22/6/2023"
          eventDesc="Charity match in aid of insert here. More description, this is a placeholder for now."
          eventLocation="Shardlow, the Wharf"
        />
        <EventsContainer
          eventTitle="Reserves"
          eventDate="22/6/2023"
          eventDesc="Charity match in aid of insert here. More description, this is a placeholder for now."
          eventLocation="Shardlow, the Wharf"
        />
        <EventsContainer
          eventTitle="U16"
          eventDate="22/6/2023"
          eventDesc="Charity match in aid of insert here. More description, this is a placeholder for now."
          eventLocation="Shardlow, the Wharf"
        />
        <EventsContainer
          eventTitle="Vets"
          eventDate="22/6/2023"
          eventDesc="Charity match in aid of insert here. More description, this is a placeholder for now."
          eventLocation="Shardlow, the Wharf"
        />
      </div>
    </div>
  );
}

export default Events;
