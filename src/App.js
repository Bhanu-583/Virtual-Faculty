import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Explore from "../src/components/Explore";
import Footer from "../src/components/Footer";
import Login from "../src/components/Login";
import Signup from "../src/components/Signup";

import './App.css'; // Import your CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
