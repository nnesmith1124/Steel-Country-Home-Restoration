import React from "react";
import Footer from "../Components/Footer";

import ServicesList from "../components-services/Services";

import NavBar from "../Components/NavBar";

export default function Services() {
  return (
    <div>
      <NavBar />

      <h1>Steel Country Home Restoration</h1>
      <ServicesList />

      <p>
        <br />
      </p>
      <Footer />
    </div>
  );
}
