import React, { useEffect, useState } from "react"; // Import the useEffect and useState hooks
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import ServiceDisplay from "./ServiceDisplay";

export default function Gutters() {
  return (
    <div>
      <NavBar />
      <br />
      <h1 className="text-5xl font-bold text-center my-8">Gutters</h1>

      <ServiceDisplay serviceName="Gutters" />
      <p>
        <br />
      </p>
      <Footer />
    </div>
  );
}
