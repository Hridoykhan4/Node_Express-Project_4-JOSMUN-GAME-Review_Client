import { Link, NavLink } from "react-router-dom";
import gameLogo from "../assets/logos/francisco-suarez-2K_b1cVyIbU-unsplash (1).jpg";
import { CircleUserRound, Menu } from "lucide-react";
const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    `relative px-4 py-2 font-semibold  transition duration-200
   ${
     isActive
       ? "text-green-400 font-bold  border-b-2 border-green-400"
       : "text-gray-200 hover:text-green-400"
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
    </>
  );

  return (
    <div className="navbar shadow-sm">
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
          <CircleUserRound />
          <Link to="/login" className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
