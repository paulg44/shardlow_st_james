/* ## IMPORTANT ## 
      the background object on each page affects the media queries in a negative way when it overlaps the page
*/

import { React, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import homepageImg from "./IMG/ssj_1.jpg";

// Imported Components
import NavBar from "./Components/SmallComponents/NavBar/NavBar";
import Footer from "./Components/SmallComponents/Footer/Footer";
import Homepage from "./Components/Pages/Homepage/Homepage";
import Event from "./Components/Pages/Events/Events";
import News from "./Components/Pages/News/News";
import Shop from "./Components/Pages/Shop/Shop";
import TeamsDisplay from "./Components/Pages/TeamsDisplay/TeamsDisplay";
import Sponsors from "./Components/Pages/Sponsors/Sponsors";
import Contact from "./Components/Pages/Contact/Contact";

function App() {
  // Data will be pulled from fa, for now using dummy data
  const teamsData = [
    {
      teamName: "First Team",
      lrcode: "25025117",
      latestResult: "2 vs 0",
      awayTeam: "Aston FC",
      nextFixture: "Aston FC (A)",
    },
    {
      teamName: "Reserves",
      latestResult: "6-2",
      awayTeam: "Aston FC",
      nextFixture: "Weston FC (H)",
    },
    {
      teamName: "Veterans",
      latestResult: "100-0",
      awayTeam: "Aston FC",
      nextFixture: "Derby County (A)",
    },
    {
      teamName: "U15",
      latestResult: "7-1",
      awayTeam: "Aston FC",
      nextFixture: "Alvaston U15 (H)",
    },
  ];

  // Possibly use this with the api?
  const [activeTeam, setActiveTeam] = useState(null);

  const handleTeamClick = (teamName) => {
    const selectedTeam = teamsData.find((team) => team.teamName === teamName);
    console.log("Selected Team:", selectedTeam);
    setActiveTeam(selectedTeam);
  };

  useEffect(() => {
    console.log("active team from app.js", activeTeam);
  }, [activeTeam]);

  return (
    <BrowserRouter className="App">
      <NavBar handleTeamClick={handleTeamClick} teamsData={teamsData} />
      <Routes>
        <Route path="/" element={<Homepage homepageImg={homepageImg} />} />
        <Route path="/events" element={<Event />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/teams/:teamName"
          element={
            <TeamsDisplay teamsData={teamsData} activeTeam={activeTeam} />
          }
        />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
