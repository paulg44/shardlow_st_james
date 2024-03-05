// Main Admin Control Panel Page
import "./ControlPanel.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
import AddResultAdmin from "./AddResults/AddResults";

function AdminControlPanel() {
  /* TODO
     - add use states for each option to enter result (DONE)
     - add a change event function for each one (DONE)
     - create function for adding to database (DONE)
     - add a function that adds the result to the database depending on which team is picked
  */

  return (
    <div>
      <AddResultAdmin />
      {/* Add News */}
      <div className="addNews">
        <p>Add new article to news section. Placeholders:</p>
        <p>Title:</p>
        <p>IMG:</p>
        <p>Description:</p>
        <p>Date:</p>
      </div>
    </div>
  );
}

export default AdminControlPanel;
