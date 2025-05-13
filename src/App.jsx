// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FriendshipPage from "./pages/FriendshipPage";
import AdultLifе from "./pages/AdultLife.jsx";
import Navbar from "./components/layout/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/friendship" element={<FriendshipPage />} />
        <Route path="/adultlife " element={<AdultLifе />} />
      </Routes>
    </Router>
  );
}

export default App;
