import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [apiUrl, setApiUrl] = useState("http://localhost:8080/api/users/login");
  const [timeoutMs, setTimeoutMs] = useState(10000); // Increased to 10 seconds
  const navigate = useNavigate();

  // Add API connection test on component mount
  useEffect(() => {
    console.log("Testing API connection...");

    // Simple GET request to check if API is reachable
    axios.get("http://localhost:8080/api")
      .then(response => {
        console.log("API reachable:", response.status);
      })
      .catch(error => {
        console.error("API not reachable:", error.message);

        if (error.code === "ERR_NETWORK") {
          console.log("Network error detected. API server might not be accessible on localhost.");
        }
      });

    // Test alternative localhost formats
    console.log("Testing alternative API URLs...");
    axios.get("http://127.0.0.1:8080/api")
      .then(response => {
        console.log("API reachable via 127.0.0.1:", response.status);
        setApiUrl("http://127.0.0.1:8080/api/users/login");
      })
      .catch(error => {
        console.error("API not reachable via 127.0.0.1");
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    console.log("Using API URL:", apiUrl);
    console.log("Using timeout:", timeoutMs + "ms");

    try {
      console.log("Making API request to login endpoint...");

      // Create axios instance with configurable timeout
      const axiosInstance = axios.create({
        timeout: timeoutMs
      });

      // Additional headers that might help
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        }
      };

      const response = await axiosInstance.post(apiUrl, {
        username,
        password,
      }, config);

      console.log("API response received:", response);

      if (response.data) {
        console.log("Login successful, token received");
        localStorage.setItem("authToken", response.data);
        navigate("/admin");
      } else {
        setErrorMessage("Login failed: No token received.");
      }
    } catch (error) {
      console.error("Login failed with error:", error);

      if (error.code === 'ECONNABORTED') {
        setErrorMessage(`Connection timed out after ${timeoutMs / 1000} seconds. Try increasing the timeout below.`);
      } else if (error.message.includes("Network Error")) {
        setErrorMessage("Network Error: Cannot connect to server. Try the alternative URL below.");
      } else {
        setErrorMessage("Login failed: " + error.message);
      }
    }
  };

  // Add ability to change API URL and timeout for debugging
  const handleApiUrlChange = (e) => {
    setApiUrl(e.target.value);
  };

  const handleTimeoutChange = (e) => {
    setTimeoutMs(parseInt(e.target.value, 10));
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

      {/* Debugging tools */}
      <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h3>Debug Settings</h3>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>API URL:</label>
          <input
            type="text"
            value={apiUrl}
            onChange={handleApiUrlChange}
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Timeout (ms):</label>
          <input
            type="number"
            value={timeoutMs}
            onChange={handleTimeoutChange}
            style={{ width: '100%', padding: '5px' }}
            min="1000"
            step="1000"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={() => setApiUrl("http://127.0.0.1:8080/api/users/login")}
            style={{ marginRight: '10px', padding: '5px 10px' }}
          >
            Use 127.0.0.1
          </button>
          <button
            type="button"
            onClick={() => setApiUrl("http://localhost:8080/api/users/login")}
            style={{ padding: '5px 10px' }}
          >
            Use localhost
          </button>
        </div>
      </div>
    </div>
  );
}