import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";
import Services from "./Routes/Services";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
