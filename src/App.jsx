import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";
import Services from "./Routes/Services";
import Contact from "./components/Contact/Contact";
import ContcactUs from "./Routes/ContcactUs";
import ContactUsForm from "./Routes/ContactUsForm";
import TeamOur from "./Routes/TeamOur";
import PricingHome from "./Routes/PricingHome";
import ProductsPage from "./Routes/ProductsPage";
import NewsPageHome from "./Routes/NewsPageHome";
import NewsDetailHome from "./Routes/NewsDetailHome";
import ProductsDetailHome from "./Routes/ProductsDetailHome";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactUs" element={<ContcactUs />} />
        <Route path="/contactUsForm" element={<ContactUsForm />} />
        <Route path="/team-our" element={<TeamOur />} />
        <Route path="/pricing" element={<PricingHome />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/news" element={<NewsPageHome />} />
        <Route path="/news-detail" element={<NewsDetailHome />} />
        <Route path="/products-detail" element={<ProductsDetailHome />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
