import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import EmailVerification from "./Pages/EmailVerification";

function App() {
  return (
    <div>
      {/* All Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/verify-email" element={<EmailVerification />} />
      </Routes>
    </div>
  );
}

export default App;
