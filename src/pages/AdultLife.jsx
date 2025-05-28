import React from "react";
import HeroYouth from "../components/AdultLife/HeroYouth.jsx";
import Footer from "../components/layout/Footer.jsx";
import ComingOfAgeSection from "../components/AdultLife/ComingOfAgeSection.jsx";
import FriendshipDistance from "../components/AdultLife/FriendshipDistance.jsx";
import CityLifeSection from "../components/AdultLife/CityLifeSection.jsx";
import SeaTravel from "../components/AdultLife/SeaTravel.jsx";
import War from "../components/AdultLife/War.jsx";
import Acquaintance from "../components/AdultLife/Acquaintance.jsx";

function AdultLife() {
  return (
    <div>
      <HeroYouth />
      <ComingOfAgeSection />
      <FriendshipDistance />
      <CityLifeSection />
      <SeaTravel />
      <War />
      <Acquaintance />
      <Footer />
    </div>
  );
}

export default AdultLife;
