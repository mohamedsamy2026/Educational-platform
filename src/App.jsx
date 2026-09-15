// Import The Landing Page All
import Home from "./Page/Home";

// Components
import Chat from "./Components/Chat";

// Style App CSS
import "./App.css";

// Import React Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Chat />
    </>
  );
}

export default App;
