import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Authountation/Authorization";
import { FaCartPlus } from "react-icons/fa";
import TanStackQuery from "../Share/TanStackQuery";

const Navbar = () => {
  const [data] = TanStackQuery();
  const { userSignOut, users } = useContext(AuthContext);

  const handleUserLogeOut = () => {
    userSignOut()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };

  const navMenu = (
    <>
      <li><NavLink to="/">HOME</NavLink></li>
      <li><NavLink to="/menu">MENU</NavLink></li>
      <li><NavLink to="/shop">ORDER</NavLink></li>
      {users?.email && (
        <li><NavLink to="/dashboard">DASHBOARD</NavLink></li>
      )}
      <li><NavLink to="/contact">CONTACT US</NavLink></li>

      {/* Cart inside mobile menu */}
      <li className="lg:hidden">
        <NavLink to="/yourOrder" className="flex items-center gap-2">
          <FaCartPlus className="text-xl" />
          <span className="badge badge-secondary">{data?.length || 0}</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-50 bg-black bg-opacity-55 text-white max-w-screen-xl mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black bg-opacity-90 rounded-box w-52 text-white">
            {navMenu}
          </ul>
        </div>

        {/* Logo */}
        <div className="ml-4 flex flex-col">
          <Link to="/" className="text-xl font-bold">Mamma Mia</Link>
          <p className="text-xs tracking-[4px] font-semibold">Restaurant</p>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-x-4 hidden lg:flex">
        {/* Cart only visible on large screen */}
        <NavLink to="/yourOrder" className="flex items-center gap-1">
          <FaCartPlus className="text-xl" />
          <div className="badge badge-sm badge-secondary">{data?.length || 0}</div>
        </NavLink>

        {/* User Avatar */}
        {users && (
          <img
            src={users.photoURL || "https://i.ibb.co/2dH3HGL/default-avatar.png"}
            alt="User"
            className="w-8 h-8 rounded-full border border-white object-cover"
          />
        )}

        {/* Auth Buttons */}
        {users ? (
          <button onClick={handleUserLogeOut} className="btn btn-sm btn-ghost">
            SIGN OUT
          </button>
        ) : (
          <Link to="/register" className="btn btn-sm btn-ghost">
            REGISTER
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
