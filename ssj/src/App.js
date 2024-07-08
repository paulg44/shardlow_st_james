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
import Table from "./Components/Pages/TeamsDisplay/Table/Table";
import ResultsFixtures from "./Components/Pages/TeamsDisplay/Results/Fixtures/ResultsFixtures";
import Players from "./Components/Pages/TeamsDisplay/Players/Players";

function App() {
  // Data will be pulled from database according to date, for now using dummy data
  const teamsData = [
    {
      id: 1,
      teamName: "SSJ Sunday",
      lrcodeTable: "25025117",
      lrcodeResults: "441578546",
      // homeScore: 3,
      // awayScore: 1,
      // awayTeam: "Lonely Boys",
      // resultDate: "29/11/23",
      // nextFixture: "FC Erewash (H)",
    },
    {
      id: 2,
      teamName: "SSJ U15's",
      lrcodeTable: "755308119",
      // homeScore: 8,
      // awayScore: 2,
      // awayTeam: "Ilkeston Town Reds U15's",
      // resultDate: "04/02/24",
      // nextFixture: "Breaston Park Black U15's (H)",
    },
    {
      id: 3,
      teamName: "SSJ Veterans",
      lrcodeTable: "865423176",
      // homeScore: 0,
      // awayScore: 4,
      // awayTeam: "Etwall Vets",
      // resultDate: "15/10/23",
      // nextFixture: "Cromford Vets(H)",
    },
  ];

  // Fireworks function

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
        <Route
          path="/teams/:teamName/table"
          element={<Table teamsData={teamsData} activeTeam={activeTeam} />}
        />
        <Route
          path="/teams/:teamName/results"
          element={
            <ResultsFixtures teamsData={teamsData} activeTeam={activeTeam} />
          }
        />
        <Route
          path="/teams/:teamName/players"
          element={<Players activeTeam={activeTeam} />}
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
