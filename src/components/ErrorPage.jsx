import Lottie from "lottie-react";
import error from "../assets/404.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen text-center flex flex-col items-center justify-center bg-black text-white px-4">
      <div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-red-500 mb-4 tracking-wide">
          404
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-md mb-6">
          Sorry Reviewer, the page you’re looking for doesn’t exist in this
          universe.
        </p>

        <Link
          to="/"
          className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-6 py-3 rounded-full text-white font-semibold text-sm sm:text-base shadow-lg hover:scale-105"
        >
          🚀 Return to Home Base
        </Link>
        <div className="w-72  sm:w-96 sm:h-96 mb-6 drop-shadow-[0_0_20px_rgba(255,0,0,0.6)]">
          <Lottie animationData={error} loop />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
