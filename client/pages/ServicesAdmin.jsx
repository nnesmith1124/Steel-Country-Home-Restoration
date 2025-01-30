import React, { useEffect, useState } from "react"; // Import the useEffect and useState hooks

const API = "http://localhost:3000/api/services";

export default function ServicesAdmin() {
  //Create a services state variable
  const [services, setServices] = useState([]); //Create the services state variable
  const [message, setMessage] = useState(""); // Create the message state variable

  //Run this effect once when the page mounts
  useEffect(() => {
    //get the services from the API
    fetch(API)
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setServices(data.result)) //set the services state variable
      .catch((error) => console.log(error)); //log any errors
  }, [services]);

  const deleteService = (index) => {
    fetch(`${API}/${services[index]._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `${token}`, // Send the token in the Authorization header
      },
    })
      .then((response) => response.json()) // Parse the response as JSON)
      .then((data) => setMessage(data.message))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Services - Admin Dashboard</h1>

      <div className="services-container">
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr className="services-table">
              <th className="serviceId">ID</th>
              <th className="service-name">Name</th>
              <th className="service-description">Description</th>
              <th className="service-image">Image URL</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={service._id} className="serviceId">
                <td className="serviceId">{index + 1}</td>
                <td className="service-name">{service.name}</td>
                <td className="service-description">{service.description}</td>
                <td className="service-image">{service.imageUrl}</td>
                <td className="actions">
                  <button onClick={() => deleteService(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {message && <p style={{ color: "red" }}>{message}</p>}{" "}
      </div>
    </div>
  );
}
