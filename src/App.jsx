// Import The Landing Page All
import Home from "./Page/Home";

// Style App CSS
import "./App.css";

// Import React Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
