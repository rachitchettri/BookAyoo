import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleLight from "./ToggleLight";
import carts from "./carts.png";
import login from "./login.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* NavLink for the "BookAyoo" text */}
        <NavLink
          to="/"
          exact
          className={({ isActive }) =>
            `text-black text-2xl font-sans font-extrabold flex-grow cursor-pointer ${isActive ? "text-blue-500" : ""}`
          }
        >
          BookAyoo
        </NavLink>
        <button
          className="block lg:hidden px-3 py-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div
          className={`lg:flex lg:space-x-4 lg:items-center ${isOpen ? "block" : "hidden"}`}
        >
          <NavLink
            to="/Books"
            exact
            className={({ isActive }) =>
              `text-black hover:bg-gray-200 px-3 py-2 rounded transition-colors ${isActive ? " text-blue-500" : ""}`
            }
          >
            Books
          </NavLink>
          <NavLink
            to="/Deals"
            exact
            className={({ isActive }) =>
              `text-black hover:bg-gray-200 px-3 py-2 rounded transition-colors ${isActive ? " text-blue-500" : ""}`
            }
          >
            Deals
          </NavLink>
          <NavLink
            to="/Carts"
            exact
            className={({ isActive }) =>
              `text-black hover:bg-gray-200 px-3 py-2 rounded transition-colors flex items-center ${isActive ? " text-blue-500" : ""}`
            }
          >
            <img src={carts} alt="Shopping Cart" className="w-8 h-8" />
          </NavLink>
          <NavLink
            to="/Login"
            exact
            className={({ isActive }) =>
              `text-black hover:bg-gray-200 px-3 py-2 rounded transition-colors flex items-center ${isActive ? " text-blue-500" : ""}`
            }
          >
            <img src={login} alt="Login" className="w-9 h-9" />
          </NavLink>
          <ToggleLight />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
