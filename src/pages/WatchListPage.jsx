import { useEffect, useState } from "react";
import useAuthValue from "../Hooks/useAuthValue";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const WatchListPage = () => {
  const { user } = useAuthValue();
  const [watchListItems, setWatchListItems] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/watchLists/${user.email}`)
        .then((res) => res.json())
        .then((lists) => setWatchListItems(lists));
    }
  }, [user]);

  //   View Handler
  const handleViewReview = (title) => {
    fetch(`http://localhost:5000/wishList/${title}`)
      .then((res) => res.json())
      .then((data) => {
        nav(`/details/${data?._id}`);
      });
  };

  //   Remove Handler

  const handleRemoveFromWatchList = (id) => {
    Swal.fire({
      title: "🔥 Delete This Like Pushpa?",
      text: "Once gone, it’ll be burned to ashes. No looking back!",
      icon: "warning",
      background: "#1a1a1a",
      color: "#fff",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#4b5563",
      confirmButtonText: "🔥 Burn It!",
      cancelButtonText: "🚫 Cancel",
      customClass: {
        popup: "rounded-lg border border-red-800",
        confirmButton: "pushpa-btn-confirm",
        cancelButton: "pushpa-btn-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/watchLists/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = watchListItems.filter(
                (watchItem) => watchItem._id !== id
              );
              setWatchListItems(remaining);

              Swal.fire({
                title: "💥 Gone Like Fire!",
                text: "Your item has been blasted out of existence.",
                icon: "success",
                background: "#0f0f0f",
                color: "#fff",
                confirmButtonColor: "#22c55e",
                confirmButtonText: "🔥 Done",
              });
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#111] to-[#1a1a1a] text-white p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-8 text-center">
          🎮 Your WatchList ({watchListItems.length})
        </h1>

        {watchListItems.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#222] text-purple-300 text-sm uppercase tracking-wide">
                  <th className="p-4">Cover</th>
                  <th className="p-4">Title</th>
                  <th className="p-4">Genre</th>
                  <th className="p-4">Rating</th>
                  <th className="p-4">Year</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {watchListItems.map((game, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#2a2a2a] border-b border-gray-700"
                  >
                    <td className="p-4">
                      <img
                        src={game.photo}
                        alt={game.title}
                        className="w-16 h-16 rounded object-cover"
                      />
                    </td>
                    <td className="p-4 font-semibold">{game.title}</td>
                    <td className="p-4">
                      <span className="bg-pink-600 text-white px-2 py-1 rounded-full text-xs">
                        {game.genre}
                      </span>
                    </td>
                    <td className="p-4 text-green-400 font-bold">
                      {game.rating} ★
                    </td>
                    <td className="p-4 text-blue-400">{game.year}</td>
                    <td className="p-4 space-x-2">
                      <button
                        onClick={() => handleViewReview(game?.title)}
                        className="text-sm bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-white transition"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleRemoveFromWatchList(game?._id)}
                        className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white transition"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-10">
            No games in your watchList yet 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default WatchListPage;
