import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; //provides access to the current location object.

import NavBarAdmin from "../Components/NavBar-Admin";
import Footer from "../Components/Footer";
import ServicesAdmin from "../components-services/ServicesAdmin";

export default function AdminServices() {
  const location = useLocation(); // Get the passed state
  const passedMessage = location.state?.message; // Extract message safely

  const [message, setMessage] = useState(passedMessage || ""); // Store message in state

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(""); // Clear message after 5 seconds
      }, 5000);

      return () => clearTimeout(timer); // Cleanup function to prevent memory leaks
    }
  }, [message]);

  return (
    <div>
      <NavBarAdmin />

      {/* Display message if it exists */}
      {message && (
        <div className="bg-green-200 text-green-800 p-4 mt-15 mb-4 rounded">
          {message}
        </div>
      )}

      <ServicesAdmin />
      
      <Footer />
    </div>
  );
}
