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
import GetInvolved from "./Components/Pages/GetInvolved/GetInvolved";
import News from "./Components/Pages/News/News";
import Shop from "./Components/Pages/Shop/Shop";
import TeamsDisplay from "./Components/Pages/TeamsDisplay/TeamsDisplay";
import Sponsors from "./Components/Pages/Sponsors/Sponsors";
import Contact from "./Components/Pages/Contact/Contact";
import DatabaseTest from "./Components/Pages/DatabaseTest";
import AdminControlPanel from "./Components/Admin/ControlPanel/ControlPanel";

function App() {
  // Data will be pulled from database according to date, for now using dummy data
  const teamsData = [
    {
      id: 1,
      teamName: "SSJ First Team",
      lrcodeTable: "344078633",
      lrcodeResults: "441578546",
    },
    {
      id: 2,
      teamName: "SSJ Reserves",
      lrcodeTable: "692613147",
    },
    {
      id: 3,
      teamName: "SSJ U16's",
      lrcodeTable: "275862418",
    },
  ];

  // Possibly use this with the api?
  const [activeTeam, setActiveTeam] = useState("");

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
        <Route path="/events" element={<GetInvolved />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/teamDisplay"
          element={
            <TeamsDisplay
              teamsData={teamsData}
              activeTeam={activeTeam}
              handleTeamClick={handleTeamClick}
            />
          }
        />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<DatabaseTest />} />
        <Route path="/controlPanel" element={<AdminControlPanel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
