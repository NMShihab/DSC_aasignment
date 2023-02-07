import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
