import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesAdmin.css";

const API = "http://localhost:8080/api/services";

export default function ServicesAdmin() {
  const navigate = useNavigate();

  // State variables
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch services on component mount
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setServices(data.result))
      .catch((error) => console.log(error));
  }, []);

  // Handle delete service
  const deleteService = (index) => {
    fetch(`${API}/${services[index]._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.log(error));
  };

  // Navigate to add service page
  const addService = () => {
    navigate("/admin/services/add-service");
  };

  // Navigate to update service page
  const updateService = (index) => {
    navigate("/admin/services/update-service", {
      state: { service: services[index] },
    });
  };

  return (
    <div className="bg-[#A1B28E] min-h-screen py-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Services - Admin Dashboard
      </h1>

      <div className="services-container mx-auto px-4">
        <table className="services-table w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="table-title text-xl text-gray-800 bg-[#4C7A5B]">
              <th className="serviceId py-3 px-4" width={100}>
                ID
              </th>
              <th className="service-name py-3 px-4" width={150}>
                Name
              </th>
              <th className="service-description py-3 px-4" width={400}>
                Description
              </th>
              <th className="service-image py-3 px-4">Image</th>
              <th className="actions py-3 px-4" width={200}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={service._id} className="border-t border-gray-300">
                <td className="serviceId text-center py-3 px-4">{index + 1}</td>
                <td className="service-name text-center py-3 px-4">{service.name}</td>
                <td className="service-description py-3 px-4">
                  {service.description}
                </td>
                <td className="service-image py-3 px-4 text-center">
                  <img
                    className="w-32 h-32 object-cover rounded-md mx-auto"
                    src={service.imageUrl}
                    alt={service.name}
                  />
                </td>
                <td className="actions text-center py-3 px-4">
                  <button
                    className="action-button py-2 px-4 mx-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
                    onClick={() => deleteService(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="action-button py-2 px-4 mx-2 text-white bg-[#A1B28E] rounded-lg hover:bg-[#4C7A5B] transition"
                    onClick={() => updateService(index)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {message && (
          <p className="confirmDelete text-red-500 text-lg mt-4">
            {message}
          </p>
        )}

        <div className="addContainer mt-6 text-center">
          <button
            className="add-button py-3 px-6 text-xl bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={addService}
          >
            Add a New Service
          </button>
        </div>
      </div>
    </div>
  );
}
