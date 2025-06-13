import Banner from "../components/Banner";
import TypeStyling from "../components/TypeStyling";
import Lottie from "lottie-react";
import gameLottie from "../assets/game.json";
import { Link, useLoaderData } from "react-router-dom";
import AllReviewCard from "../components/AllReviewCard";

const Home = () => {
  const reviews = useLoaderData();
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

      {/* Review Card Start */}
      <div className="grid w-11/12 mx-auto pb-4 grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 overflow-hidden">
        {[...reviews]
          ?.filter((_, i) => i !== 5 && i !== 3)
          .slice(0, 7)
          ?.map((review) => (
            <AllReviewCard key={review?._id} review={review}></AllReviewCard>
          ))}
      </div>

      {/* Review Card End */}

      <div className="text-center py-4">
        <Link
          to="/allReview"
          className="relative inline-block px-6 py-2 font-bold tracking-wide text-green-400 border border-green-400 rounded-md group overflow-hidden transition duration-300 ease-in-out"
        >
          <span className="absolute inset-0 w-full h-full transform scale-0 bg-green-500 opacity-20 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>

          <span className="absolute inset-0 border border-green-400 group-hover:border-transparent rounded-md transition-all duration-300 ease-in-out"></span>

          <span className="relative z-10 group-hover:text-black">
            All Reviews
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
