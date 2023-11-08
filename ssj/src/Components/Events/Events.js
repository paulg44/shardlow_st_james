// Events Component

import "./Events.css";
import EventsContainer from "../EventsContainer/EventsContainer";

function Events({ id }) {
  return (
    <div id={id} className="events">
      <h3>Upcoming Events</h3>
      <div className="eventList">
        <EventsContainer
          eventTitle="Charity Match"
          eventDate="22/6/2023"
          eventDesc="Charity match in aid of insert here. More description, this is a placeholder for now."
          eventLocation="Shardlow, the Wharf"
        />
        <EventsContainer
          eventTitle="Charity Match"
          eventDate="22/6/2023"
          eventDesc="Charity match in aid of insert here. More description, this is a placeholder for now."
          eventLocation="Shardlow, the Wharf"
        />
        <EventsContainer
          eventTitle="Charity Match"
          eventDate="22/6/2023"
          eventDesc="Charity match in aid of insert here. More description, this is a placeholder for now."
          eventLocation="Shardlow, the Wharf"
        />
      </div>
    </div>
  );
}

export default Events;
