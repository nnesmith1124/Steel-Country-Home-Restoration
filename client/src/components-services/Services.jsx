import React, { useEffect, useState } from "react"; // Import the useEffect and useState hooks

const API = "http://localhost:3000/api/services";

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
      <ul>
        {services.map((service) => {
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
        })}
      </ul>
    </div>
  );
}
