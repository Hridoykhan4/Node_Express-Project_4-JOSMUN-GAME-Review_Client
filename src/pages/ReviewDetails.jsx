import { useLoaderData } from "react-router-dom";
import useAuthValue from "../Hooks/useAuthValue";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const review = useLoaderData();
  const { user } = useAuthValue();
  const { title, desc, genre, photo, rating, year, email, userName } = review;

  const fallbackNames = [
    "ShadowWolf",
    "PixelHero",
    "NovaStorm",
    "GhostRider",
    "ArcadeKing",
  ];
  const displayName =
    userName || fallbackNames[Math.floor(Math.random() * fallbackNames.length)];
  const displayEmail = email || "anonymous@josmun.io";

  // Handle Watch Add
  const handleAddToWatchList = (watchReview) => {
    const finalWatchList = {
      title: watchReview?.title,
      desc: watchReview?.desc,
      genre: watchReview?.genre,
      photo: watchReview?.photo,
      rating: watchReview?.rating,
      year: watchReview?.year,
      userEmail: user?.email,
      userName: user?.displayName || "Anonymous",
      addedAt: new Date().toISOString(),
    };

    fetch(
      `https://josmun-games-server.vercel.app/watchLists/check?userEmail=${user.email}&title=${watchReview.title}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.exists) {
          Swal.fire({
            icon: "error",
            title: "Already in WatchList!",
            text: "You’ve already added this game.",
            background: "#1e1e1e",
            color: "#fff",
            confirmButtonColor: "#ff4d4d",
          });
        } else {
          // ✅ Add it
          fetch("https://josmun-games-server.vercel.app/watchLists", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(finalWatchList),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.insertedId) {
                Swal.fire({
                  icon: "success",
                  title: "Added to WatchList!",
                  background: "#0f0f0f",
                  color: "#fff",
                  confirmButtonColor: "#22c55e",
                });
              }
            });
        }
      });
  };

  return (
    <div className=" text-white py-12 px-6 sm:px-10 font-sans">
      <div className="max-w-5xl mx-auto shadow-2xl rounded-lg overflow-hidden border border-gray-800 bg-[#141414]">
        <div className="md:flex">
          <div
            className="md:w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${photo})`, minHeight: "350px" }}
          ></div>

          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-3 tracking-wide">
                {title}
              </h1>
              <p className="text-gray-300 text-sm mb-5">{desc}</p>

              <div className="space-y-1 text-sm">
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
                <p>
                  <span className="text-gray-400">Reviewed By:</span>{" "}
                  <span className="text-indigo-400 font-medium">
                    {displayName}
                  </span>
                </p>
                <p>
                  <span className="text-gray-400">Contact:</span>{" "}
                  <span className="text-cyan-400">{displayEmail}</span>
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex  flex-wrap gap-2 text-sm">
              <span className="bg-red-600 px-3 py-1 rounded-full">
                #{genre}
              </span>
            </div>

            <button
              onClick={() => handleAddToWatchList(review)}
              className="relative mt-2 inline-block px-6 py-2 font-bold tracking-wide text-green-400 border border-green-400 rounded-md group overflow-hidden transition duration-300 ease-in-out"
            >
              <span className="absolute inset-0 w-full h-full transform scale-0 bg-green-500 opacity-20 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>

              <span className="absolute inset-0 border border-green-400 group-hover:border-transparent rounded-md transition-all duration-300 ease-in-out"></span>

              <span className="relative z-10 group-hover:text-black">
                + Add To WatchList
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
