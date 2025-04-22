import { Link, NavLink } from "react-router-dom";
import img1 from '../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import { useContext } from "react";
import { AuthContext } from "./Authountation/Authorization";
import { FaCartPlus } from "react-icons/fa";
import TanStackQuery from "../Share/TanStackQuery";

const Navbar = () => {
  const[data]=TanStackQuery()
  const {userSignOut,users}=useContext(AuthContext)
  const handleUserLogeOut=()=>{
    userSignOut()
    .then(res=>{
      console.log(res.user)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const navMenu=<>
              <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
            <NavLink to={"/login"}>DASHBOARD</NavLink>
            </li>
            <li>
            <NavLink to={"/contact"}>CONTACT US</NavLink>
            </li>
            <li>
            <NavLink to={"/menu"}>OUR MENU</NavLink>
            </li>
            <li>
            <NavLink to={"/shop"}>OUR ORDER</NavLink>
            </li>
  </>
  return (
    <div className="navbar fixed z-20 bg-black text-white bg-opacity-55 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-40 mt-3 w-52 p-2 shadow"
          >
        {
          navMenu
        }
          </ul>
        </div>
        <div className="ml-4 flex flex-col">
        <a className="text-white text-xl text-center font-bold">BISTRO BOSS</a>
        <p className="text-white text-sm tracking-[4px] text-center  font-semibold">Restaurant</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex"> 
        <ul className="menu menu-horizontal px-1">
           {navMenu}
        </ul>
      </div>
      <div className="navbar-end">
        {/* <div><img src={img1} className="w-12" alt="" srcset="" /></div> */}
        <NavLink to={"/yourOrder"} className="flex gap-1">
          <FaCartPlus  className="text-xl " />
          <div className="badge badge-sm badge-secondary">+{data?.length}</div>
        
        </NavLink>

        {
          users?<Link to={"/login"} onClick={handleUserLogeOut} className="btn btn-ghost">SIGN OUT</Link>:<Link to={"/register"} className="btn btn-ghost">REGISTER</Link>
        }

        

      </div>
    </div>
  );
};

export default Navbar;
