import { React } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

// Imported Components
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
