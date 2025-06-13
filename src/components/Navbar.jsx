import { NavLink } from "react-router-dom";
import gameLogo from "../assets/logos/francisco-suarez-2K_b1cVyIbU-unsplash (1).jpg";
import { CircleUserRound, Menu } from "lucide-react";
const Navbar = () => {
  const themeIcon = (
    <>
      <label className="flex cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
      </label>
    </>
  );

  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink to="/allReview">All Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/addReview">Add Review</NavLink>
      </li>
      <li>
        <NavLink>My Reviews</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start md:w-1/2 w-full">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu></Menu>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={gameLogo}
            alt="JosMin Games Logo"
          />
          <span className="text-2xl ms-3 font-bold text-gray-800 dark:text-white">
            JosMin Games
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2">
          {themeIcon}
          <CircleUserRound />
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
