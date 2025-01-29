/* ## IMPORTANT ## 
      the background object on each page affects the media queries in a negative way when it overlaps the page
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import homepageImg from "./assets/IMG/ssj_1.jpg";

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
import About from "./Components/Pages/About/About";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage homepageImg={homepageImg} />} />
        <Route path="/events" element={<GetInvolved />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/teamDisplay" element={<TeamsDisplay />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutUs" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
