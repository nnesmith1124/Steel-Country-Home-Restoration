import React from "react";
import Footer from "../Components/Footer";

import ServicesList from "../components-services/Services";

import NavBar from "../Components/NavBar";

export default function Services() {
  return (
    <div>
      <NavBar />

      <h1 className="text-5xl font-bold text-center my-8">
        List of Available Services
      </h1>
      <ServicesList />

      <p>
        <br />
      </p>
      <Footer />
    </div>
  );
}
