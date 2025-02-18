import React from "react";
import NavBar from "../Components/NavBar-Admin"; //Hala
import Footer from "../Components/Footer";
import ServicesAdmin from "../components-services/ServicesAdmin";

export default function Admin() {
  return (
    <div>
      <NavBar />

      <ServicesAdmin />
      <p>
        <br />
      </p>
      <Footer />
    </div>
  );
}
