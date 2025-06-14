import { useEffect, useState } from "react";
import useAuthValue from "../Hooks/useAuthValue";
import { Link } from "react-router-dom";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const { user } = useAuthValue();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myReviews/${user.email}`)
        .then((res) => res.json())
        .then((reviews) => setMyReviews(reviews));
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f0f] to-[#1a1a1a] text-white p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-red-500 text-center mb-10 tracking-widest drop-shadow-xl">
          🔥 My Game Reviews ({myReviews.length})
        </h1>

        {myReviews.length === 0 ? (
          <p className="text-center text-gray-400">
            You haven’t reviewed any games yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myReviews.map((review) => (
              <div
                key={review._id}
                className="bg-[#161616] p-5 rounded-xl border border-red-700 hover:border-yellow-400 shadow-xl hover:shadow-red-500/50 transition-all duration-300 group relative"
              >
                <div className="w-full h-48 rounded-md overflow-hidden mb-4">
                  <img
                    src={review.photo}
                    alt={review.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h2 className="text-xl font-bold text-yellow-400 mb-1">
                  {review.title}
                </h2>
                <p className="text-gray-300 text-sm line-clamp-3 mb-3">
                  {review.desc}
                </p>

                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span className="text-pink-500 font-semibold">
                    {review.genre}
                  </span>
                  <span className="text-blue-400">{review.year}</span>
                  <span className="text-green-400">{review.rating} ★</span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Reviewed by:{" "}
                  <span className="text-white font-semibold">
                    {review.userName || "Anonymous"}
                  </span>
                </p>

                <div className="flex gap-2 mt-4">
                  <Link
                    to={`/updateReview/${review._id}`}
                    className="text-sm  px-3 py-1 cursor-pointer bg-indigo-600 hover:bg-indigo-700 rounded shadow"
                  >
                    Edit/Update
                  </Link>
                  <button className="text-sm px-3 py-1 bg-red-600 hover:bg-red-700 rounded shadow">
                    Delete
                  </button>
                </div>

                <div className="absolute inset-0 z-0 rounded-xl border border-red-600 opacity-10 group-hover:opacity-80 blur-xl animate-pulse pointer-events-none"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
