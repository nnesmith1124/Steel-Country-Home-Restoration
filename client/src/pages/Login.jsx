import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Add component mount logging
  useEffect(() => {
    console.log("Login component mounted");
    console.log("API endpoint will be:", `http://localhost:8080/api/users/login`);
    // Check if React Router is working properly
    console.log("Navigate function available:", typeof navigate === "function");
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    console.log("Attempting login with username:", username);

    try {
      console.log("Making API request to login endpoint...");

      const response = await axios.post(`http://localhost:8080/api/users/login`, {
        username,
        password,
      });

      console.log("API response received:", response);
      console.log("Response status:", response.status);
      console.log("Response data type:", typeof response.data);
      console.log("Response data:", response.data);

      if (response.data) {
        console.log("Login successful, token received");
        console.log("Setting auth token in localStorage");
        localStorage.setItem("authToken", response.data);

        console.log("Checking localStorage after setting:", localStorage.getItem("authToken"));

        console.log("Attempting to navigate to /admin");
        navigate("/admin");
        console.log("Navigate function called");
      } else {
        console.log("No data in response");
        setErrorMessage("Login failed: No token received.");
      }
    } catch (error) {
      console.error("Login failed with error:", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request (no response received):", error.request);
      } else {
        // Something happened in setting up the request
        console.error("Error message:", error.message);
      }

      setErrorMessage("Could not log in successfully. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="header">Login</h1>
        <div className="username">
          <label>Username</label>
          <input
            className="text-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="password">
          <label>Password </label>
          <input
            className="text-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button className="submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}