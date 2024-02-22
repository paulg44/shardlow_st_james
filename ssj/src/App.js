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
import DatabaseTest from "./Components/Pages/DatabaseTest";
import AdminControlPanel from "./Components/Admin/ControlPanel/ControlPanel";

function App() {
  // Data will be pulled from fa, for now using dummy data
  const teamsData = [
    {
      teamName: "SSJ Sunday",
      lrcode: "25025117",
      homeScore: 3,
      awayScore: 1,
      awayTeam: "Lonely Boys",
      resultDate: "29/11/23",
      nextFixture: "FC Erewash (H)",
    },
    {
      teamName: "SSJ U15's",
      lrcode: "755308119",
      homeScore: 8,
      awayScore: 2,
      awayTeam: "Ilkeston Town Reds U15's",
      resultDate: "04/02/24",
      nextFixture: "Breaston Park Black U15's (H)",
    },
    {
      teamName: "SSJ Veterans",
      lrcode: "865423176",
      homeScore: 0,
      awayScore: 4,
      awayTeam: "Etwall Vets",
      resultDate: "15/10/23",
      nextFixture: "Cromford Vets(H)",
    },
  ];

  // Fireworks function

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
        <Route path="/test" element={<DatabaseTest />} />
        <Route path="/controlPanel" element={<AdminControlPanel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
