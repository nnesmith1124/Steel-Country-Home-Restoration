import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import ServiceDisplay from "./ServiceDisplay";

export default function Roofing() {
  return (
    <div>
      <NavBar />
      <br />
      <h1 className="text-5xl font-bold text-center my-8">Roofing</h1>
      <ServiceDisplay serviceName="Roofing" />

      <p>
        <br />
      </p>
      <Footer />
    </div>
  );
}
