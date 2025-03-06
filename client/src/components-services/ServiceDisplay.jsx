import React, { useEffect, useState } from "react"; // Import the useEffect and useState hooks

export default function ServiceDisplay(props) {
  const { serviceName } = props;

  const API = `http://localhost:8080/api/services/servicename/${serviceName}`;

  console.log(props);
  console.log(serviceName);
  console.log(API);
  //Create a services state variable
  const [service, setService] = useState({});

  //Run this effect once when the page mounts
  useEffect(() => {
    //get the services from the API
    fetch(API)
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setService(data.result)) //set the services state variable
      .catch((error) => console.log(error)); //log any errors
  }, []);

  return (
    <div className="flex flex-row items-center bg-[#A1B28E] p-6 rounded-lg">
      {/* Container for Image and Description */}
      <div className="flex flex-row justify-evenly items-center w-full">
        {/* Left side: Image */}
        <div className="service-image p-4 w-[40vw] h-[40vw] rounded-lg overflow-hidden shadow-md bg-[#4C7A5B]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={service.imageUrl}
            alt={service.name}
          />
        </div>

        {/* Right side: Description */}
        <div className="ml-6 bg-white p-6 rounded-lg shadow-md w-[40vw] h-[20vw] flex justify-center items-center">
          <p className="text-lg text-center">{service.description}</p>
        </div>
      </div>
    </div>
  );
}
