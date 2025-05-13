import { useState } from "react";
import Header from "./Components/Header.jsx";
import Slider from "./Components/Slider.jsx";
import ProductionHouse from "./Components/ProductionHouse.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <Slider />
    </>
  );
}
export default App;
