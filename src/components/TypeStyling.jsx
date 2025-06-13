import { Typewriter } from "react-simple-typewriter";

const TypeStyling = () => {
  return (
    <div className="flex items-center justify-center pt-6  px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white">
        <Typewriter
          words={[
            "Top Games",
            "Dive Into the World of Gaming!",
            "Explore Latest Reviews",
          ]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={160}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </h1>
    </div>
  );
};

export default TypeStyling;
