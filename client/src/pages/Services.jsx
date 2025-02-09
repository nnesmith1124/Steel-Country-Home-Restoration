import React from "react";

import ServicesList from "../components-services/Services";
import ServicesAdmin from "../components-services/ServicesAdmin";
import NavBar from "../Components/NavBar";

export default function Services() {
  return (
    <div>
      <NavBar />

      <h1>Steel Country Home Restoration</h1>
      <ServicesList />
      <ServicesAdmin />
    </div>
  );
}
