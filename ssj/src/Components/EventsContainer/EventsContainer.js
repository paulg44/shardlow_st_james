// Events Container Component

import "./EventsContainer .css";

function EventsContainer(props) {
  return (
    <div>
      <h6>{props.eventTitle}</h6>
      <p>{props.eventDate}</p>
      <p>{props.eventDesc}</p>
      <p>{props.eventLocation}</p>
    </div>
  );
}

export default EventsContainer;
