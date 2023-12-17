import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import("preline");

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <section style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
