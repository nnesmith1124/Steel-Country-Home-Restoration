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
        <table className="table">
          <thead>
            <tr className="services-table">
              <th className="serviceId" width={100} align="center">
                ID
              </th>
              <th className="service-name" width={100}>
                Name
              </th>
              <th className="service-description" width={400}>
                Description
              </th>
              <th className="service-image">Image</th>
              <th className="actions" width={200}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={service._id} className="serviceId">
                <td className="serviceId" align="center">
                  {index + 1}
                </td>
                <td className="service-name">{service.name}</td>
                <td className="service-description">{service.description}</td>
                <td className="service-image">
                  <img src={service.imageUrl} alt={service.name} width="300" />
                </td>
                <td className="actions">
                  <button onClick={() => deleteService(index)}>Delete</button>
                  <button
                    onClick={() => alert(`Edit service: ${service.name}`)}
                  >
                    Edit
                  </button>
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
