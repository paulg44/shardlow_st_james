// Events Container Component

import "./EventsContainer .css";

function EventsContainer(props) {
  return (
    <div className="eventsContainer">
      <h6>{props.eventTitle}</h6>
      <p className="eventDate">{props.eventDate}</p>
      <p className="eventDesc">{props.eventDesc}</p>
      <p className="eventLocation">{props.eventLocation}</p>
    </div>
  );
}

export default EventsContainer;
