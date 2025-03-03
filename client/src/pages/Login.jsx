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
      console.log("Before axios call - this should appear");

      // Adding timeout to catch hanging requests
      const axiosInstance = axios.create({
        timeout: 5000 // 5 second timeout
      });

      console.log("Axios instance created with timeout");

      let response;
      try {
        // Wrapping in additional try/catch to pinpoint exactly where it fails
        console.log(`Sending POST to http://localhost:8080/api/users/login`);
        response = await axiosInstance.post(`http://localhost:8080/api/users/login`, {
          username,
          password,
        });
        console.log("API call completed successfully");
      } catch (axiosError) {
        console.log("Inner axios call failed:", axiosError.message);
        // Re-throw to be caught by the outer catch
        throw axiosError;
      }

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
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);

      // Check for network errors specifically
      if (error.message.includes("Network Error")) {
        console.error("NETWORK ERROR: The API server might not be running or accessible");
        setErrorMessage("Network Error: Cannot connect to the server. Is it running?");
      } else if (error.code === 'ECONNABORTED') {
        console.error("TIMEOUT: The request took too long to complete");
        setErrorMessage("Timeout: Server took too long to respond");
      } else if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        setErrorMessage(`Server error (${error.response.status}): ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request (no response received):", error.request);
        console.error("Request method:", error.request.method);
        console.error("Request URL:", error.request.url);
        setErrorMessage("Request failed: No response from server");
      } else {
        // Something happened in setting up the request
        console.error("Unknown error in request setup");
        setErrorMessage("Failed to set up request: " + error.message);
      }

      // Log CORS information to help debug cross-origin issues
      console.log("Checking for potential CORS issues...");
      console.log("Current origin:", window.location.origin);
      console.log("Target API:", "http://localhost:8080");
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