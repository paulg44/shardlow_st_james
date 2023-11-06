import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import homepageImg from "./IMG/ssj_1.jpg";

// Imported Components
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Components/Homepage/Homepage";
// import Events from "./Components/Events/Events";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage homepageImg={homepageImg} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
