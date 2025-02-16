import React, { useEffect, useState } from "react"; // Import the useEffect and useState hooks

export default function ServiceDisplay(props) {
  const { serviceName } = props;

  const API = `http://localhost:3000/api/services/servicename/${serviceName}`;

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
    <div>
      <div className="service-image p-4 place-self-center w-[60vw]">
        <img src={service.imageUrl} alt={service.name} />
      </div>
      <p className="mx-20">{service.description}</p>
    </div>
  );
}
