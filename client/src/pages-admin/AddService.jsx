import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBarAdmin from "../Components/NavBar-Admin"; //Hala
import Footer from "../Components/Footer";

const API = "http://localhost:3000/api/services";

export default function AddService() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState(""); // Create the message state variable

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    // console.log(serviceName);
    // console.log(description);
    // console.log(imageUrl);

    const newService = {
      name,
      description,
      imageUrl,
    };

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `${token}`, // Send the token in the Authorization header
      },
      body: JSON.stringify(newService),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add service");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message || "Service added successfully!");
        // Optionally, reset the form fields after successful submission
        setName("");
        setDescription("");
        setImageUrl("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Error adding service");
      });

    //setMessage("Service added successfully!");

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
            Add New Service
          </h2>

          {/* Service Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Service Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service name"
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
              placeholder="Enter service description"
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
              placeholder="Enter image URL"
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
              Add Service
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
