import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import logo from "/Resources/logo.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "px-2 py-1 text-green-600 lg:text-white"
              : "px-2 py-1"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "px-2 py-1 text-green-600 lg:text-white"
              : "px-2 py-1"
          }
        >
          Add Product
        </NavLink>
        <NavLink
          to="/mycart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "px-2 py-1 text-green-600 lg:text-white"
              : "px-2 py-1"
          }
        >
          My Cart
        </NavLink>
      </div>
    </>
  );

  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      {/* FOR SMALL DEVICE */}
      <div className="flex justify-end md:hidden navbar bg-black text-red-400 font-bold">
        <div>
          {user ? (
            <div className="flex items-center">
              <span className="text-white text-xs">{user?.displayName}</span>
              <img
                className="ml-3 w-8 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <button
                onClick={handleSignOut}
                className="ml-3 px-4 py-2 border border-green-700 text-green-600 hover:text-green-500 text-sm font-bold drop-shadow-xl rounded-xl"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="px-4 py-2 text-green-600 hover:text-green-500 text-sm font-semibold drop-shadow-lg rounded-lg">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* FOR LARGE DEVICES */}
      <div className="navbar bg-black text-red-800 font-bold text-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="mx-auto w-14" src={logo} alt="" />
            <span className="text-green-600 font-black text-2xl">roadstar</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="hidden md:flex md:justify-end navbar-end ">
          {user ? (
            <div className="flex items-center">
              <span className="text-white">{user?.displayName}</span>
              <img
                className="ml-3 w-8 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <button
                onClick={handleSignOut}
                className="ml-3 px-4 py-2 border border-green-700 text-green-600 hover:text-green-500 text-sm font-bold drop-shadow-xl rounded-xl"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="px-4 py-2 text-green-600 hover:text-green-500 text-base font-semibold drop-shadow-lg rounded-lg">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
