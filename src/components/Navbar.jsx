import { Link, NavLink, useNavigate } from "react-router-dom";
import gameLogo from "../assets/logos/francisco-suarez-2K_b1cVyIbU-unsplash (1).jpg";
import { Menu, UserX, UserCircle } from "lucide-react";
import useAuthValue from "../Hooks/useAuthValue";

const Navbar = () => {
  const { user, logOutUser, setUser } = useAuthValue();
  const nav = useNavigate();
  const navLinkStyle = ({ isActive }) =>
    `px-4 py-2 font-semibold transition ${
      isActive
        ? "text-green-400 font-bold border-b-2 border-green-400"
        : "text-gray-300 hover:text-green-400"
    }`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allReview" className={navLinkStyle}>
          All Reviews
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink to="/addReview" className={navLinkStyle}>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/myReviews" className={navLinkStyle}>
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/watchLists" className={navLinkStyle}>
              Game WatchList
            </NavLink>
          </li>
        </>
      ) : (
        <li>
          {" "}
          <NavLink to="/register" className={navLinkStyle}>
            Register Now!
          </NavLink>
        </li>
      )}
    </>
  );

  const dropdownVal = (
    <details className="dropdown dropdown-end">
      <summary className="btn p-0 border-none bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-purple-700 hover:to-red-600 text-white shadow-md rounded-full w-10 h-10 flex items-center justify-center">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <UserCircle className="w-7 h-7" />
        )}
      </summary>

      <ul className="menu dropdown-content overflow-y-scroll bg-neutral text-neutral-content rounded-xl z-10 w-60 p-4 shadow-lg backdrop-blur-sm">
        <li className="mb-2">
          <div className="text-sm font-semibold">
            <span className="text-gray-400">Name:</span>{" "}
            <span className="text-white">{user?.displayName || "Guest"}</span>
          </div>
        </li>
        <li>
          <div className="text-sm font-semibold">
            <span className="text-gray-400">Email:</span>{" "}
            <span className="text-white">{user?.email || "Not Provided"}</span>
          </div>
        </li>
      </ul>
    </details>
  );

  return (
    <div className="drawer z-50">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar p-0 shadow-md sm:px-5">
          <div className="flex-1">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={gameLogo}
                alt="Game Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-white">JosMin Games</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            {user ? (
              dropdownVal
            ) : (
              <p className="hidden sm:flex">
                <UserX className="text-gray-400" />
              </p>
            )}
            {user ? (
              <button
                onClick={() =>
                  logOutUser()
                    .then(() => {
                      setUser(null);
                      nav("/");
                    })
                    .catch(() => {})
                }
                className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-600"
              >
                Login
              </Link>
            )}

            <label htmlFor="nav-drawer" className="btn btn-ghost lg:hidden">
              <Menu />
            </label>
          </div>
        </div>
      </div>

      {/* Small devices drawer */}
      <div className="drawer-side z-50">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-64 min-h-full bg-base-200 space-y-1 relative">
          <label
            htmlFor="nav-drawer"
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 cursor-pointer text-xl"
            title="Close"
          >
            ✖
          </label>

          <div className="flex items-center gap-2 mb-4 mt-6">
            <img
              src={gameLogo}
              className="w-10 h-10 rounded-full object-cover"
              alt="Game Logo"
            />
            <span className="text-lg font-bold">JosMin Games</span>
          </div>

          {links}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
