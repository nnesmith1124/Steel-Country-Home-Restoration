import React, { useState } from "react";
//import Footer from "../Components/Footer";
import axios from "axios";

import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });

      if (response.data) {
        console.log("Login successful, token received:", response.data);

        localStorage.setItem("authToken", response.data);
      } else {
        setErrorMessage("Login failed: No token received.");
      }
    } catch (error) {
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
