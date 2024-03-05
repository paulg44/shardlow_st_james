// Component for adding news from admin panel
import { Form } from "react-bootstrap";
import { useState } from "react";

function AddNewsAdmin() {
  return (
    <div>
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

export default AddNewsAdmin;
