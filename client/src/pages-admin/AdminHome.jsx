import React from "react";
import NavBarAdmin from "../Components/NavBar-Admin"; //Hala
import Footer from "../Components/Footer";

export default function Admin() {
  return (
    <div>
      <NavBarAdmin />
      <h1 className="text-5xl font-bold text-center my-8">Admin Dashboard</h1>

      <p>
        <br />
      </p>
      <Footer />
    </div>
  );
}
