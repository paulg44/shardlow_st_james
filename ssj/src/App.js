import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import homepageImg from "./IMG/ssj_1.jpg";

// Imported Components
import NavBar from "./Components/SmallComponents/NavBar/NavBar";
import Footer from "./Components/SmallComponents/Footer/Footer";
import Homepage from "./Components/Pages/Homepage/Homepage";
import Event from "./Components/Pages/Events/Events";
import News from "./Components/Pages/News/News";
import TeamsDisplay from "./Components/Pages/TeamsDisplay/TeamsDisplay";
import Sponsors from "./Components/Pages/Sponsors/Sponsors";
import Contact from "./Components/Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage homepageImg={homepageImg} />} />
        <Route path="/events" element={<Event />} />
        <Route path="/news" element={<News />} />
        <Route path="/teams" element={<TeamsDisplay />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
