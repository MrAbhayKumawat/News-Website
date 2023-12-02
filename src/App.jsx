import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Pages/Home/Home";
import Fashion from "./Components/Pages/Fashions/Fashion"
import Travel from "./Components/Pages/Travels/Travel"
import About from "./Components/Pages/AboutUs/About"
import Contact from "./Components/Pages/ContactUs/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/travel" element={<Travel />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
