import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white font-monsterrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              Pixieset
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/login"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Register
              </Link>
              <Link
                to="/dashboard"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="hidden md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/login"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Register
          </Link>
          <Link
            to="/dashboard"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
