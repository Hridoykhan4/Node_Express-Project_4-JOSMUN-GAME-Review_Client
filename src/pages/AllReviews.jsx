import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../components/AllReviewCard";
import { useEffect, useState } from "react";

const AllReviews = () => {
  const reviews = useLoaderData();
  const [sortBy, setSortBy] = useState("");
  const [filterGenre, setFilterGenre] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const genres = [...new Set(reviews.map((r) => r.genre))];

  const filteredReviews = filterGenre
    ? reviews.filter((review) => review.genre === filterGenre)
    : reviews;

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "year") return b.year - a.year;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold tracking-wide">All Reviews</h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <select
              className="bg-gray-700 text-gray-100 px-4 py-2 rounded-md shadow-md border border-gray-600
              focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Sort By">Sort by</option>
              <option value="rating">Rating</option>
              <option value="year">Year</option>
            </select>

            {/* Filter Dropdown */}
            <select
              className="bg-gray-700 text-gray-100 px-4 py-2 rounded-md shadow-md border border-gray-600
              focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}
            >
              <option value="">Filter by Genre</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedReviews.map((review) => (
            <AllReviewCard key={review?._id} review={review} />
          ))}
        </div>

        {sortedReviews.length === 0 && (
          <p className="text-center text-gray-400 mt-10">No reviews found.</p>
        )}
      </div>
    </div>
  );
};

export default AllReviews;
