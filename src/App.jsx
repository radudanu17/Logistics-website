import "./App.css";
import Hedear from "./components/Hedear/Hedear";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import Softwares from "./components/Softwares/Softwares";
import Solutions from "./components/Solutions/Solutions";

function App() {
  return (
    <div>
      <Hedear />
      <Products />
      <Solutions />
      <Softwares />
      <Services />
    </div>
  );
}

export default App;
