import bgImage from "../assets/collected/shoot.jpg";
import { useForm } from "react-hook-form";
import useAuthValue from "../Hooks/useAuthValue";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const review = useLoaderData();
  const { register, handleSubmit } = useForm();
  const { user } = useAuthValue();

  const onSubmit = (data) => {
    const updatedReview = {
      ...data,
      email: user?.email,
      userName: user?.displayName,
    };

    fetch(`https://josmun-games-server.vercel.app/reviews/${review._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire({
            title: "🎯 Boom! Review Updated",
            html: `<strong style="color:#ff4c29">${user?.displayName}</strong>, your edits are now live!<br>Gamers are counting on your opinion 🎮`,
            icon: "success",
            background: "#121212",
            color: "#ffffff",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
            confirmButtonColor: "#ff4c29",
            confirmButtonText: "🔥 Nice!",
            backdrop: `
          rgba(0,0,0,0.6)
              url("https://media.giphy.com/media/l0Exk8EUzSLsrErEQ/giphy.gif")
              center
             no-repeat
`,
          });
        } else {
          Swal.fire({
            title: "😕 Nothing Changed!",
            html: `You didn’t tweak anything, <strong style="color:#ff4c29">${user?.displayName}</strong>.<br>Make a change to update.`,
            icon: "warning",
            background: "#1a1a1a",
            color: "#fefefe",
            confirmButtonColor: "#facc15",
            confirmButtonText: "Got it 👌",
            backdrop: `
             rgba(255,0,0,0.2)
            url("https://media.giphy.com/media/26xBP4v4RgczvF1sA/giphy.gif")
          center
             no-repeat
`,
          });
        }
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center px-4 py-5"
    >
      <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md p-10 rounded-3xl max-w-6xl w-full shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-3">
          Update Your Game Review
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-10 text-lg">
          You can modify your previous thoughts about the game. Keep it honest
          and helpful!
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
              defaultValue={review.title}
              {...register("title", { required: true })}
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Photo URL (Use imgbb)
            </label>
            <input
              defaultValue={review.photo}
              {...register("photo", { required: true })}
              type="url"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Rating (1-5)
            </label>
            <input
              defaultValue={review.rating}
              {...register("rating", { required: true })}
              type="number"
              min="1.0"
              max="5.0"
              step="0.1"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Publish Year */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Publish Year
            </label>
            <input
              defaultValue={review.year}
              {...register("year", { required: true })}
              type="number"
              min="2000"
              max="2100"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Genre */}
          <div className="md:col-span-2">
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Select a Genre
            </label>
            <select
              defaultValue={review.genre}
              {...register("genre", { required: true })}
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option disabled value="">
                Choose a genre
              </option>
              <option>Action</option>
              <option>Adventure</option>
              <option>RPG</option>
              <option>Sports</option>
              <option>Horror</option>
              <option>Simulation</option>
              <option>Survival</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Review Description
            </label>
            <textarea
              defaultValue={review.desc}
              {...register("desc", { required: true })}
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md transition-all duration-300"
            >
              Update Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
