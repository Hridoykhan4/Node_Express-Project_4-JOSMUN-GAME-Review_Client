import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import bgC from "../assets/collected/ban10.jpg";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${bgC})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-[#0f172a] text-white py-3 px-6 mt-16 border-t border-gray-700 shadow-inner"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* JasMun Game Info */}
        <div>
          <h2 className="text-3xl font-extrabold text-red-500 mb-3">
            🎮 JasMun Game
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Explore immersive reviews, unleash your inner gamer. JasMun brings
            community-powered feedback to the world of gaming.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Navigate</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="/" className="hover:text-red-400 transition">
                🏠 Home
              </a>
            </li>
            <li>
              <a href="/reviews" className="hover:text-red-400 transition">
                📋 All Reviews
              </a>
            </li>
            <li>
              <a href="/addReview" className="hover:text-red-400 transition">
                ✍️ Add Review
              </a>
            </li>
           {/*  <li>
              <a href="/contact" className="hover:text-red-400 transition">
                📩 Contact
              </a>
            </li> */}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Connect</h3>
          <div className="flex gap-5">
            <a className="text-gray-400 hover:text-sky-400 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a className="text-gray-400 hover:text-blue-500 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a className="text-gray-400 hover:text-pink-500 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a className="text-gray-400 hover:text-red-600 transition">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} JasMun Game. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
