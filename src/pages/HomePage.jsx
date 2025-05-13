// src/pages/HomePage.jsx
import React from "react";
import HeroSection from "../components/Home/HeroSection.jsx";
import LoveStorySection from "../components/Home/LoveStorySection.jsx";
import Footer from "../components/layout/Footer.jsx";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <LoveStorySection />
      <Footer />
    </div>
  );
}

export default HomePage;
