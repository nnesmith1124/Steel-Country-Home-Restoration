import React from "react";
import { FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="bg-[#4a9cd3] flex flex-col space-y-3">
      {/* Logo */}
      <div className="relative top-5 left-5">
        <img src="../assets/logo-2.jpg" alt="logo" width={100} height={100} />
      </div>

      {/* Address */}
      <div className="text-white my-10">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-white text-xl"
          />
          <p>106 Carmel Dr., Cibolo,</p>
        </div>
        <p> TX, United States, Texas</p>
      </div>
      {/* Phone */}
      <div className="flex items-center space-x-2">
        <FaPhone className="text-white" />
        <span className="text-white">(210) 627-3105</span>
      </div>
      {/* Email */}
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-white" />
        <span className="text-white">manncarter33@cloud.com</span>
      </div>
      {/* Facebook Link */}
      <div>
        <a href="https://www.facebook.com/people/Steel-Country-Home-Restorations/61569069813941/">
          <FaFacebook className="text-white text-2xl hover:text-blue-400" />
        </a>
      </div>
    </div>
  );
}
