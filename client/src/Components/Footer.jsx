import React from "react";
import { FaFacebook, FaPhone, FaEnvelope, FaHome, FaTools, FaClipboardList } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#4C7A5B] text-white">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaHome className="mr-2" /> Steel Country Home Restoration
            </h3>
            <p className="mb-4 text-gray-200">
              Quality home restoration services you can trust. We take pride in our workmanship and customer satisfaction.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/people/Steel-Country-Home-Restorations/61569069813941/"
                className="transition-all hover:text-blue-400 hover:scale-110"
                aria-label="Facebook">
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaTools className="mr-2" /> Our Services
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 transition-colors">
                <a href="/roofing">Roofing</a>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <a href="/gutters">Gutters</a>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <a href="/painting">Painting</a>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <a href="/services">Pressure Washing</a>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <a href="/services">Interior Renovations</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaClipboardList className="mr-2" /> Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 transition-colors">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <a href="/about">About Us</a>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <a href="/contact">Get a Free Estimate</a>
              </li>
              <li className="hover:text-gray-300 transition-colors">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mr-3 mt-1 text-lg"
                />
                <span>106 Carmel Dr., Cibolo, TX, United States, Texas</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-lg" />
                <a href="tel:2106273105" className="hover:underline">(210) 627-3105</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-lg" />
                <a href="mailto:manncarter33@cloud.com" className="hover:underline">manncarter33@cloud.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#3a5e45] py-4">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Steel Country Home Restoration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}