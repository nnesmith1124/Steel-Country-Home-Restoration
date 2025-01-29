import React, { useEffect, useState } from "react"; // Import the useEffect and useState hooks

const API = "http://localhost:3000/services";

export default function Services() {
  //Create a services state variable
  const [services, setServices] = useState([]);

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
      <h1>Services</h1>
      <ul>
        {services.map((service) => {
          console.log(service.name); // Log the service name
          return (
            <li key={service._id}>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </li>
            // Render the service name inside a list item
          );
        })}
      </ul>
    </div>
  );
}
