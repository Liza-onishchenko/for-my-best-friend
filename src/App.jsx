// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FriendshipPage from "./pages/FriendshipPage";
import AdultLifе from "./pages/AdultLife.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";
import ScrollArrow from "./components/layout/ScrollArrow.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/friendship" element={<FriendshipPage />} />
        <Route path="/adultlife" element={<AdultLifе />} />
      </Routes>
      <ScrollArrow />
    </Router>
  );
}

export default App;
