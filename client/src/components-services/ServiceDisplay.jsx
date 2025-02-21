import React, { useEffect, useState } from "react"; // Import the useEffect and useState hooks
import { useNavigate } from "react-router-dom";

export default function ServiceDisplay(props) {
  const { serviceName } = props;
  const navigate = useNavigate();

  const API = `http://localhost:3000/api/services/servicename/${serviceName}`;

  console.log(props);
  console.log("service name from props " + serviceName);
  console.log(API);
  //Create a services state variable
  const [service, setService] = useState({});

  //Run this effect once when the page mounts
  useEffect(() => {
    if (!serviceName) return; // Ensure serviceName is valid before making a request

    //get the services from the API
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch service");
        }
        return response.json();
      }) // Parse the response as JSON
      .then((data) => {
        setService(data.result);
        console.log("Fetched service:", data.result);
      }) //set the services state variable
      .catch((error) => console.log("Error fetching service:", error)); //log any errors
  }, [serviceName]);

  console.log(service);

  return (
    <div>
      <div className="service-image p-4 place-self-center w-[40vw]">
        <img src={service.imageUrl} alt={service.name} />
      </div>
      <p className="mx-20">{service.description}</p>
      <div className="flex justify-end mx-20">
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
