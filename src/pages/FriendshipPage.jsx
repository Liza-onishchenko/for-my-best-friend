import HeroSectionFriends from "../components/FriendshipPage/HeroSectionFriends.jsx";
import EarlyYearsSection from "../components/FriendshipPage/EarlyYearsSection.jsx";
import SchoolTraditionsSection from "../components/FriendshipPage/SchoolTraditionsSection.jsx";
import CommonHobbiesSection from "../components/FriendshipPage/CommonHobbiesSection.jsx";
import SchoolTrialsSection from "../components/FriendshipPage/SchoolTrialsSection.jsx";
import Footer from "../components/layout/Footer.jsx";

function FriendshipPage() {
  return (
    <div>
      <HeroSectionFriends />
      <EarlyYearsSection />
      <SchoolTraditionsSection />
      <CommonHobbiesSection />
      <SchoolTrialsSection />
      <Footer />
    </div>
  );
}

export default FriendshipPage;
