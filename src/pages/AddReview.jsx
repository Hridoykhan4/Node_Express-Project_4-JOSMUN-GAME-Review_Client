import bgImage from "../assets/collected/ban.jpg";
import { useForm } from "react-hook-form";
const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { desc, genre, photo, title, rating, year } = data;
    const reviewData = {
      desc,
      genre,
      photo,
      title,
      rating,
      year,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" flex items-center justify-center px-4 py-12"
    >
      <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md p-10 rounded-3xl max-w-6xl w-full shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-3">
          Share Your Thoughts on JASMUN Game
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-10 text-lg">
          Your insights help other gamers dive deeper into the world of JASMUN.
          Let us know what you think!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Game Title */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Game Title
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Enter your Game Title"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Photo URL (Use imgbb)
            </label>
            <input
              type="url"
              {...register("photo", { required: true })}
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Rating (1-5)
            </label>
            <input
              type="number"
              {...register("rating", { required: true })}
              placeholder="Enter rating"
              min="1.0"
               step="0.1"
              max="5.0"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Publish Year */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Publish Year
            </label>
            <input
              {...register("year", { required: true })}
              type="number"
              min={2000}
              max={2100}
              placeholder="Enter publishing year"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Genre */}
          <div className="md:col-span-2">
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Select a Genre
            </label>
            <select
              {...register("genre", { required: true })}
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option disabled>Choose a genre</option>
              <option>Action</option>
              <option>Adventure</option>
              <option>RPG</option>
              <option>Sports</option>
              <option>Horror</option>
              <option>Simulation</option>
              <option>Survival</option>
            </select>
          </div>

          {/* Review */}
          <div className="md:col-span-2">
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Review Description
            </label>
            <textarea
              {...register("desc", { required: true })}
              rows="4"
              placeholder="Write your game review here..."
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md transition-all duration-300"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
