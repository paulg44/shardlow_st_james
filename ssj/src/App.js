import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Imported Components
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;