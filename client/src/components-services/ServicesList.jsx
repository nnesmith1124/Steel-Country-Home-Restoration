import React, { useEffect, useState } from "react"; // Import the useEffect and useState hooks
import { useNavigate } from "react-router-dom";

const API = "http://localhost:3000/api/services";

export default function ServicesList() {
  //Create a services state variable
  const [services, setServices] = useState([]);

  const navigate = useNavigate();

  //Run this effect once when the page mounts
  useEffect(() => {
    //get the services from the API
    fetch(API)
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setServices(data.result)) //set the services state variable
      .catch((error) => console.log(error)); //log any errors
  }, []);

  return (
    <div>
      <ul>
        {/* {services.map((service) => {
          // Render the service name inside a list item
          return (
            <li key={service._id}>
              <h2 className="text-4xl font-bold text-center my-8">
                {service.name}
              </h2>
              <p className="mx-20">{service.description}</p>
              <div className="service-image p-4 place-self-center w-[40vw]">
                <img src={service.imageUrl} alt={service.name} />
              </div>
            </li>
          );
        })} */}

        {/* Responsive layout. */}
        <div className="grid p-10 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service._id}
              // Card styling
              // overflow-hidden: Hides any content that exceeds the parent container’s dimensions. Prevents elements (like images or text) from spilling outside a card.
              // transition-transform: Adds a smooth animation effect when applying transform-related properties like scale
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={service.imageUrl}
                alt={service.name}
                // object-cover: Ensures image fills its container without distortion while maintaining its aspect ratio.
                // Crops parts of the image if necessary to prevent stretching.
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {service.description.substring(0, 100)}...
                </p>
                <button
                  onClick={() => navigate(`/${service.name.toLowerCase()}`)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}
