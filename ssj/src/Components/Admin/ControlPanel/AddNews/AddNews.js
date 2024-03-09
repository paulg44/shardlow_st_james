// Component for adding news from admin panel
import { Form } from "react-bootstrap";
import { useState } from "react";

function AddNewsAdmin() {
  // States
  const [title, setTitle] = useState("");
  const [img, setImg] = useState();
  const [imgDesc, setImgDesc] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  //   Functions
  //   Title
  function handleTitle(e) {
    e.preventDefault();
    setTitle(e.target.value);
    console.log(title);
  }

  //   Image
  function handleImageUpload(e) {
    e.preventDefault();
    setImg(e.target.value);
    console.log(img);
  }

  //   Image Description
  function handleImageDesc(e) {
    e.preventDefault();
    setImgDesc(e.target.value);
    console.log(imgDesc);
  }

  //   Description
  function handleDescription(e) {
    e.preventDefault();
    setDesc(e.target.value);
    console.log(desc);
  }

  //   Date
  function handleDate(e) {
    e.preventDefault();
    setDate(e.target.value);
    console.log(date);
  }

  function handleAddNewsItem() {}

  return (
    <div>
      {/* Add News */}
      <div className="addNews">
        <p>Add new article to news section.</p>
        <Form role="form" onSubmit={handleAddNewsItem}>
          <Form.Group controlId="title">
            <Form.Label>Title:</Form.Label>
            <Form.Control onChange={handleTitle}></Form.Control>
          </Form.Group>

          {/* Need to research uploading a file */}
          <Form.Group controlId="img">
            <Form.Label>Image File:</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>

          <Form.Group controlId="imgDescription">
            <Form.Label>Image Description:</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date:</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <button type="submit" onClick={handleAddNewsItem}>
            Add Result
          </button>
        </Form>
      </div>
    </div>
  );
}

export default AddNewsAdmin;
