import Banner from "../components/Banner";
import TypeStyling from "../components/TypeStyling";
import Lottie from "lottie-react";
import gameLottie from "../assets/game.json";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TypeStyling></TypeStyling>
      {/* Lottie anime */}
      <div className="flex justify-center items-center">
        <div className="w-32 h-32">
          <Lottie animationData={gameLottie} loop={true} />
        </div>
      </div>
      {/* Lottie anime end */}
    </div>
  );
};

export default Home;
