import React from "react";
import NavBar from "../Components/NavBar"; //Hala
import Footer from "../Components/Footer";
import ServicesAdmin from "../components-services/ServicesAdmin";

export default function Admin() {
  return (
    <div>
      <NavBar />
      <h1>Steel Country Home Restoration</h1>

      <ServicesAdmin />
      <p>
        <br />
      </p>
      <Footer />
    </div>
  );
}
