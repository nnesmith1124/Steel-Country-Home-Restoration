import React, { useEffect, useState } from "react"; // Import the useEffect and useState hooks

const API = "http://localhost:3000/api/inquiry";

export default function Services() {
  //Create an inquiry state variable
  const [inquiry, setInquiry] = useState([]);

  //Run this effect once when the page mounts
  useEffect(() => {
    //get the inquiry from the API
    fetch(API)
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setInquiry(data.result)) //set the inquiry state variable
      .catch((error) => console.log(error)); //log any errors
  }, []);

  return (
    <div>
      <ul>
        {inquiry.map((inquiry) => {
          // Render the inquiry name inside a list item
          return (
            <li key={inquiry.id}>
              <h2 className="text-4xl font-bold text-center my-8">
                {inquiry.name}
              </h2>
              <p className="mx-20">{inquiry.service}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}