import React from "react";
//import Navbar from "../Components/index"; //Nick
import NavBar from "../Components/NavBar"; //Hala
import Footer from "../Components/Footer";
//import NavBar from "../Components/Navigation"; //Hala
import Slideshow from "../Components/Slideshow";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavBar />
      <img
        className="lg:w-full"
        src="../assets/cover-photo.png"
        alt="cover-photo"
      />

      <h1 className="text-5xl font-bold text-center my-8">Services</h1>
      <p className="mx-10">
        Offering roofing, drywall, painting, pressure washing, gutters, soffit,
        fascia, interior renovations, and roofing repairs. Complimentary
        inspections, insurance claim help, and flexible financing available.
        Quality work to restore and enhance your home!
      </p>

      <h1 className="text-5xl font-bold text-center my-8">Tips</h1>
      <Slideshow />

      <p>
        <br />
      </p>
      <Footer />
    </div>
  );
}
