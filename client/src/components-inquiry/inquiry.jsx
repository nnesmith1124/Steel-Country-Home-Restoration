import React, { useEffect, useState } from "react"; // Import the useEffect and useState hooks

const API = "http://localhost:3000/api/inquiry";

export default function Inquiries() {
  //Create an inquiry state variable
  const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);

  //Run this effect once when the page mounts
  useEffect(() => {
    //get the inquiry from the API
    fetch(API)
      .then((response) => response.json()) // Parse the response as JSON
      .then(data => { 
        setColumn(objecj.keys(data.user[0])) }) //set the inquiry state variable
        setRecords(data.user)
      .catch((error) => console.log(error)); //log any errors
  }, []);
// Return table display. 
  return (
    <div>
       <table classname = 'table' >  
        <thead>
          <tr>
            {column.map((column,index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.zipCode}</td>
                <td>{record.service}</td>
                <td>{record.message}</td>
                <td>{record.status}</td>
              
            </tr>
          ))}
        </tbody>
        </table>
        </div>
  );
}

