import React, { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import navigation hook

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

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
                Steel Country Home Restoration
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
              className={`lg:flex items-center space-x-6 text-white absolute lg:relative top-16 lg:top-0 right-0 w-full lg:w-auto bg-[#4C7A5B] lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"
                }`}
            >
              {/* Services Dropdown */}
              <li
                className="relative text-2xl"
                onMouseEnter={() => setDropdownOpen(true)}
              >
                <button
                  className="focus:outline-none hover:text-black text-2xl flex justify-between w-full lg:w-auto"
                  onClick={() => {
                    setDropdownOpen(!dropdownOpen); // Toggle dropdown on click for both mobile and desktop
                  }}
                  onMouseEnter={() => {
                    if (!menuOpen) {
                      setDropdownOpen(true); // Show dropdown on hover for desktop
                    }
                  }}
                >
                  Services ▼
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`lg:absolute lg:left-0 lg:mt-1 lg:w-40 w-fit bg-white text-black shadow-lg rounded-md transition-opacity duration-200 
                  ${dropdownOpen
                      ? "opacity-100 visible pointer-events-auto"
                      : "opacity-0 invisible pointer-events-none"
                    }`}
                  onMouseLeave={() => {
                    if (!menuOpen) {
                      setDropdownOpen(false); // Hide dropdown when mouse leaves for desktop
                    }
                  }}
                >
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-[#4C7A5B]">
                      <a href="/roofing">Roofing</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#4C7A5B]">
                      <a href="/gutters">Gutters</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#4C7A5B]">
                      <a href="/painting">Painting</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hover:text-black text-2xl">
                <a href="/about">About</a>
              </li>
              <li className="hover:text-black text-2xl font-bold">
                <a href="/contact">Get A Free Estimate</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
