// Contact Component

import "./Contact.css";
import ContactPerson from "./ContactPerson/ContactPerson";

function Contact() {
  return (
    <div className="contact">
      <div className="homepageObject contactObject"></div>
      <h3>Contact</h3>
      <div className="contactPersonsList">
        <ContactPerson
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
        />
        <ContactPerson
          contactName="Tom Mitchell"
          contactPosition="Chairman"
          contactNumber="07809921354"
          contactEmail="mrChairman@ssj.com"
        />
      </div>
    </div>
  );
}

export default Contact;
