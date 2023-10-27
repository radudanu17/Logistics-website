import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hedear from "./components/Hedear/Hedear";
import Contact from "./components/Contact/Contact";
import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";

function App() {
  return (
    <div>
      <Hedear />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
