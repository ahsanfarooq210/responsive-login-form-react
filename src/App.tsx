import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Authentication from "./features/authentication/Authentication";

function App() {
  const [count, setCount] = useState(0);

  return (
      <Authentication/>
    
  );
}

export default App;
