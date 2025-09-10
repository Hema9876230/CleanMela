// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bins from "./Bins";
import Emergency from "./Emergency";
import Report from "./Report";
import Toilets from "./Toilets";
import Admin from "./Admin";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import About from "./About";



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-600 p-4 text-white flex justify-around">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/emergency" className="hover:underline">Emergency</Link>
          <Link to="/report" className="hover:underline">Report</Link>
          <Link to="/toilets" className="hover:underline">Toilets</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
          <Link to="/about" className="hover:underline">About</Link>
          
        </nav>

        {/* Routes */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/report" element={<Report />} />
            <Route path="/toilets" element={<Toilets />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/bins" element={<Bins />} />
          
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
