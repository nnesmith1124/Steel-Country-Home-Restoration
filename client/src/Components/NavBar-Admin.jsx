import React, { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";

//import "./Navigation.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative h-[8vh] z-10">
          <nav className="bg-[#4C7A5B] p-4 h-[8vh] ">
            {/* set the background color and p-4: Adds padding to all sides of the navbar (padding of 1rem). */}
            <div className="container mx-auto flex justify-between items-center">
              {/* Title and Home Icon */}
              <div className="flex items-center">
                <a href="/" className="flex items-center gap-2">
                  <FaHome className="text-white w-6 h-6 mr-3" />
                  <h1 className="text-white text-xl font-bold">
                    Rustic Oak Home Restoration
                  </h1>
                </a>
              </div>
    
              {/* Navigation Links Container */}
              <div className="flex flex-row-reverse justify-between items-center">
                {/* Hamburger Menu (Mobile) */}
                <button
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                    if (!menuOpen) setDropdownOpen(false); // Reset dropdown when closing menu
                  }}
                  className="lg:hidden text-white focus:outline-none"
                >
                  <FaBars className="w-6 h-6" />
                </button>
    
                {/* Navigation Links */}
                <ul
                  className={`lg:flex items-center space-x-6 text-white absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out ${
                    menuOpen ? "block" : "hidden"
                  }`}
                >
                  {/* Home with Icon */}
    
                  <li className="hover:text-black text-2xl">
                    <a href="/admin/services">Services</a>
                  </li>
                  <li className="hover:text-black text-2xl">
                    <a href="/admin/inquiries">Inquiries</a>
                  </li>
                  <li className="hover:text-black text-2xl">
                    <a href="/">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
  );
}
