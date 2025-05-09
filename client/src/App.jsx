import { useState } from "react";
import Header from "../Components/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    </>
  );
}
export default App;
