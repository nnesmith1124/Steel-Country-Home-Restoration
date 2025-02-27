import React, { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";

//import "./Navigation.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative h-[15vh]">
      {/* Logo */}
      <div className="absolute top-0 left-10 w-1/6 h-1/6 lg:w-1/8">
        <img
          src="../assets/logo-2.jpg"
          alt="logo" /*width={200} height={200}*/
        />
      </div>

      <nav className="bg-[#4C7A5B] p-4 h-[15vh] ">
        {/* set the background color and p-4: Adds padding to all sides of the navbar (padding of 1rem). */}
        <div className="container mx-auto flex flex-row-reverse justify-between items-center ">
          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
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
            className={`lg:flex items-center space-x-6 text-white absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {/* Home with Icon */}
            <li className="hover:text-black text-2xl flex items-center">
              <a href="/admin" className="flex items-center gap-2">
                <FaHome /> Home
              </a>
            </li>

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
      </nav>
    </div>
  );
}
