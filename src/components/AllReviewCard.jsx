import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const AllReviewCard = ({ review }) => {
  const { _id,  genre, photo, title, rating, year } = review;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <div className="relative h-56">
        <img src={photo} alt={title} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <div className="absolute bottom-2 left-3">
          <h2 className="text-white text-xl font-bold drop-shadow-lg">
            {title}
          </h2>
          <p className="text-sm text-gray-300">
            {year} • {genre}
          </p>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-4 space-y-2 text-white">
        <p className="text-sm text-gray-300 badge badge-dash">Weekend Deal</p>
        <div className="flex items-center justify-between">
          <span className="text-yellow-400 font-semibold">★ {rating}/5</span>
        </div>
      </div>

      {/* Sale Section (Optional) */}
      <div className="bg-gray-800 px-4 py-3 text-white flex items-center justify-between">
        <Link to={`/details/${_id}`} className="bg-green-600 px-2 py-1 rounded text-sm font-bold">
          Details
        </Link>
        <span className="text-green-400 font-bold">$4.54 USD</span>
      </div>
    </motion.div>
  );
};

export default AllReviewCard;
