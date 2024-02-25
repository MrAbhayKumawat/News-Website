import "./App.css";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/AboutUs/About";
import Contact from "./Components/Pages/ContactUs/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Postdetails from "./Components/Postdetails/Postdetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />

          <Route path="/Postdetails" Component={Postdetails} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
