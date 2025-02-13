import React, { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import navigation hook

//import "./Navigation.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="relative h-[15vh]">
      {/* Logo */}
      <div className="absolute top-0 left-10 w-1/6 h-1/6 lg:w-1/8">
        <img
          src="../assets/logo-2.jpg"
          alt="logo" /*width={200} height={200}*/
        />
      </div>

      <nav className="bg-[#4a9cd3] p-4 h-[15vh] ">
        {/* set the background color and p-4: Adds padding to all sides of the navbar (padding of 1rem). */}
        <div className="container mx-auto flex flex-row-reverse justify-between items-center ">
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
          {/* lg:flex: On large screens, links appear as flex container(displayed horizontally).*/}
          {/* space-x-6: Adds a horizontal gap between the links (6 units). */}
          {/* text-white: Makes the text color white. */}
          {/* absolute lg:relative top-16: On mobile, the menu is positioned absolutely (overlapping content) and appears 16 units below the top. */}
          {/* lg:top-0: On large screens, the menu is positioned normally at the top (relative). */}
          {/* w-full: On mobile, the menu takes up the full width. */}
          {/* lg:w-auto: On large screens, the width is automatic. */}
          {/* bg-gray-800 lg:bg-transparent: Sets the background color to dark gray on mobile (bg-gray-800), 
                but it becomes transparent on large screens (lg:bg-transparent). */}
          {/* p-4 lg:p-0: Padding on mobile (p-4), no padding on large screens (lg:p-0). */}
          {/* shadow-lg lg:shadow-none: Adds a large shadow to the mobile menu (shadow-lg), but no shadow on large screens (lg:shadow-none). */}
          {/* transition-all duration-300 ease-in-out: Smooth transition for all property changes, lasting 300ms with ease-in-out timing. */}{" "}
          <ul
            className={`lg:flex items-center space-x-6 text-white absolute lg:relative top-16 lg:top-0 right-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {/* Home with Icon */}
            <li className="hover:text-black text-2xl flex items-center">
              <a href="/" className="flex items-center gap-2">
                <FaHome /> Home
              </a>
            </li>
            {/* Services Dropdown */}
            <li
              className="relative text-2xl"
              onMouseEnter={() => setDropdownOpen(true)}
              //onMouseLeave={() => setDropdownOpen(false)} // Closes dropdown when mouse leaves
            >
              {/* Services Button */}
              {/* <a
                className="focus:outline-none hover:text-black text-2xl"
                href="/services"
              >
                Services ▼
              </a> */}
              <button
                className="focus:outline-none hover:text-black text-2xl flex justify-between w-full lg:w-auto"
                onClick={() => {
                  if (menuOpen) {
                    setDropdownOpen(!dropdownOpen); // Toggle dropdown in mobile mode
                  } else {
                    navigate("/services"); // Navigate to /services on desktop
                  }
                }}
              >
                Services ▼
              </button>

              {/* Dropdown Menu */}
              {/* absolute left-0 mt-1: Positioned absolutely below the "Services" button with a top margin. */}
              {/* w-48: Sets the width of the dropdown menu to 48 units. */}
              {/* bg-white text-black: Sets background to white and text color to black. */}
              {/* shadow-lg: Adds a large shadow around the dropdown. */}
              {/* rounded-md: Rounds the corners of the dropdown. */}
              {/* The class toggles based on the state of dropdownOpen: */}
              {/* opacity-100 visible: When dropdownOpen is true, the dropdown is visible. */}
              {/* opacity-0 invisible pointer-events-none: When dropdownOpen is false, it becomes invisible and non-interactive. */}
              <div
                // className={`lg:absolute lg:left-0 lg:mt-1 bg-white text-black w-fit shadow-lg rounded-md transition-opacity duration-200
                //   ${
                //     dropdownOpen || menuOpen
                //       ? "opacity-100 visible"
                //       : "opacity-0 invisible pointer-events-none lg:pointer-events-auto"
                //   }
                //   lg:opacity-100 lg:visible lg:pointer-events-auto lg:block`}

                className={`lg:absolute lg:left-0 lg:mt-1 lg:w-40 w-fit bg-white text-black shadow-lg rounded-md transition-opacity duration-200 
      ${
        dropdownOpen || menuOpen
          ? "opacity-100 visible pointer-events-auto"
          : "opacity-0 invisible pointer-events-none"
      }`}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <ul className="py-2">
                  {/* px-4 py-2: Padding on the left, right, top, and bottom of each list item. */}
                  {/* hover:bg-gray-200: Changes the background color on hover. */}
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="/roofing">Roofing</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="/gutters">Gutters</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="/painting">Painting</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hover:text-black text-2xl">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-black text-2xl">
              <a href="/contact">Contact</a>
            </li>
            <li className="hover:text-black text-2xl font-bold">
              <a href="/inquiry">Get A Free Estimate</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
