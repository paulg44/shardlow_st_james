// Contact Person's Component

import { FaRegBell, FaRegUser } from "react-icons/fa";
import "./ContactPerson.css";

function ContactPerson(props) {
  return (
    <div className="contactPerson">
      <h6>{props.contactName}</h6>
      <div className="contactInfo">
        <FaRegUser className="icon" />
        <p className="position">{props.contactPosition}</p>
      </div>
      <div className="contactInfo">
        <FaRegBell className="icon" />
        <p className="phone">{props.contactNumber}</p>
      </div>
      {/* <div className="contactInfo">
        <FaRegEnvelope className="icon" />
        <p className="email">{props.contactEmail}</p>
      </div> */}
    </div>
  );
}

export default ContactPerson;
