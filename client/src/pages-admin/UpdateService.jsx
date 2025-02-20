import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"; //provides access to the current location object.

import NavBarAdmin from "../Components/NavBar-Admin"; //Hala
import Footer from "../Components/Footer";

const API = "http://localhost:3000/api/services";

export default function UpdateService() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the passed state
  // const serviceToBeUpdated = location.state?.serviceName; // Extract message safely
  // const _id = location.state?._id;

  const serviceToBeUpdated = location.state?.service;
  const _id = location.state?.service._id;

  // Initialize state with existing service values
  const [name, setName] = useState(serviceToBeUpdated.name || "");
  const [description, setDescription] = useState(
    serviceToBeUpdated.description || ""
  );
  const [imageUrl, setImageUrl] = useState(serviceToBeUpdated.imageUrl || "");
  const [message, setMessage] = useState(""); // Create the message state variable

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh

    const updatedService = {
      name,
      description,
      imageUrl,
    };
    fetch(`${API}/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `${token}`, // Send the token in the Authorization header
      },
      body: JSON.stringify(updatedService),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update service");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message || "Service updated successfully!");
        // Optionally, reset the form fields after successful submission
        setName("");
        setDescription("");
        setImageUrl("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Error updating service");
      });

    // Navigate to the services page and pass the success message
    navigate("/admin/services", {
      state: { message: message || "Service updated successfully!" },
    });
  };
  return (
    <div>
      <NavBarAdmin />

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Update Service "{serviceToBeUpdated.name}"
          </h2>

          {/* Service Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Service Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                // console.log(serviceName);
                // setMessage(serviceName);
              }}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              rows="4"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Image URL
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-around">
            <button
              type="submit"
              className="w-1/3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              // onClick={() => {
              //   //handleSubmit();

              // }}
            >
              Update Service
            </button>
            <button
              type="button"
              className="w-1/3 bg-gray-500 text-white py-2 rounded-lg mr-2 hover:bg-gray-600 transition duration-300"
              onClick={() => navigate(-1)} // Navigates back
            >
              Cancel
            </button>
            {message && (
              <p
                className="confirmAdd"
                style={{ color: "red", fontSize: "large" }}
              >
                {message}
              </p>
            )}{" "}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
