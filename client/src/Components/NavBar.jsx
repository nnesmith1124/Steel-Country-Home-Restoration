import React from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { useState } from "react"; //to get drop down menu
import "./Navigation.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div class="relative">
      {/* Logo */}
      <div class="absolute top-0 left-10">
        <img src="../assets/logo-2.jpg" alt="logo" width={200} height={200} />
      </div>

      <nav className="bg-[#4a9cd3] p-4">
        {/* set the background color and p-4: Adds padding to all sides of the navbar (padding of 1rem). */}
        <div className="container mx-auto flex justify-between items-center">
          <div></div>
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
            className={`lg:flex space-x-6 text-white absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out ${
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
              className="relative text-2xl "
              onMouseEnter={() => setDropdownOpen(true)}
            >
              {/* Services Button */}
              <a
                className="focus:outline-none hover:text-black text-2xl"
                href="/services"
              >
                Services ▼
              </a>

              {/* Dropdown Menu - Ensures No Flickering */}
              {/* absolute left-0 mt-1: Positioned absolutely below the "Services" button with a top margin. */}
              {/* w-48: Sets the width of the dropdown menu to 48 units. */}
              {/* bg-white text-black: Sets background to white and text color to black. */}
              {/* shadow-lg: Adds a large shadow around the dropdown. */}
              {/* rounded-md: Rounds the corners of the dropdown. */}
              {/* The class toggles based on the state of dropdownOpen: */}
              {/* opacity-100 visible: When dropdownOpen is true, the dropdown is visible. */}
              {/* opacity-0 invisible pointer-events-none: When dropdownOpen is false, it becomes invisible and non-interactive. */}
              <div
                className={`absolute left-0 mt-1 w-48 bg-white text-black shadow-lg rounded-md transition-opacity duration-200 ${
                  dropdownOpen
                    ? "opacity-100 visible"
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
              <a href="/contact">Get A Free Estimate</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

/* <div className="navigation-component">
      <div className="navigation-container">
        <div className="logo-container">
          <img src="../assets/logo.jpg" alt="logo" width={200} height={200} />
        </div>
        <nav>
          <ul className="nav-menu">
            <li>
              <a className="navitem" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="navitem" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="navitem" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="navitem" href="/services">
                Services
              </a>
            </li>
            <li>
              <a className="navitem" href="/inquiry">
                Inquiry
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
 */
