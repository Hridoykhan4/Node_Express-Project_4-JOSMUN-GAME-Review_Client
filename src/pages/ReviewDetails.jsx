import { useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
  const review = useLoaderData();
  const { title, desc, genre, photo, rating, year } = review;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2b2b2b] text-white py-12 px-6 sm:px-10 font-sans">
      <div className="max-w-5xl mx-auto shadow-2xl rounded-lg overflow-hidden border border-gray-800 bg-[#141414]">
        {/* Top Content */}
        <div className="md:flex">
          {/* Image */}
          <div
            className="md:w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${photo})`, minHeight: "350px" }}
          ></div>

          {/* Info */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-3 tracking-wide">
                {title}
              </h1>
              <p className="text-gray-300 text-sm mb-5">{desc}</p>
              <div className="space-y-1">
                <p>
                  <span className="text-gray-400">Genre:</span>{" "}
                  <span className="text-pink-400 font-semibold">{genre}</span>
                </p>
                <p>
                  <span className="text-gray-400">Released:</span>{" "}
                  <span className="text-blue-400">{year}</span>
                </p>
                <p>
                  <span className="text-gray-400">Rating:</span>{" "}
                  <span className="text-green-400 font-bold">{rating} ★</span>
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <span className="bg-red-600 px-3 py-1 rounded-full">
                #{genre}
              </span>
              <span>
                Add To WatchList
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#1f1f1f] p-6 mt-1 border-t border-gray-700">
          <h2 className="text-xl font-semibold mb-2 text-white">
            Why You’ll Love It
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Switch characters on-the-fly for dynamic missions</li>
            <li>Vast, detailed open-world with endless exploration</li>
            <li>Immersive storylines and criminal chaos</li>
            <li>Online multiplayer and modding community</li>
            <li>Critically acclaimed gameplay and graphics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
