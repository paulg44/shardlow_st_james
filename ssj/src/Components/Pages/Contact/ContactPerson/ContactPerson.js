// Contact Person's Component

import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import "./ContactPerson.css";

function ContactPerson(props) {
  return (
    <div className="contactPerson">
      <h6>{props.contactName}</h6>
      <p className="position">
        <FaUser />
        {props.contactPosition}
      </p>
      <p className="phone">
        <FaPhone />
        {props.contactNumber}
      </p>
      <p className="email">
        <FaEnvelope />
        {props.contactEmail}
      </p>
    </div>
  );
}

export default ContactPerson;
