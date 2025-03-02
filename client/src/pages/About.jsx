import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <div>
      <NavBar />
      <img
        className="lg:w-full"
        src="../assets/cover-photo.png"
        alt="cover-photo"
      />
      <br />
      <h1 className="text-5xl font-bold text-center">About</h1>
      <br />
      <div class="grid grid-cols-2">
        <div className="text-3xl text-center">Welcome to Steel Country Home Restorations</div>
        <div className="text-3xl text-center">Are values</div>
        <div className="text-center p-10 rounded-xl text-2xl border-40 border-[#A1B28E] mb-10 mr-5 flex flex-col justify-evenly h-full">
          At Steel Country Home Restorations, we are dedicated to restoring and
          enhancing your home with top-quality services that you can trust.
          Located in Cibolo, TX, we proudly serve all of South Texas, including
          San Antonio, Corpus Christi, the Rio Grande Valley, and surrounding
          areas. Whether you're in need of roofing, drywall, painting, pressure
          washing, gutters, soffit, fascia, or interior renovations, our skilled
          team is here to help. We specialize in a wide range of home
          restoration services, including roofing (repairs, installations, and
          inspections), drywall (repairs, installations, and finishing),
          painting (interior and exterior), pressure washing (restoring your
          home’s exterior), gutters, soffit & fascia (installations and
          repairs), interior renovations (transforming your living space), and
          roofing repairs (quick fixes for any roofing issues).
        </div>

        <div className="text-center p-10 rounded-xl text-2xl border-40 border-[#A1B28E] mb-10 flex flex-col justify-evenly h-full">
          We believe in providing value at every step. That’s why we offer
          complimentary inspections to assess the condition of your roof and
          other home areas. Our expert inspectors look for early-stage
          deterioration, potential leak points, and structural issues before
          they become major problems. Additionally, we offer insurance claim
          assistance to help navigate through the process with ease. Our team
          will provide detailed documentation and professional insights to
          ensure that you receive the coverage you deserve. We understand that
          home restoration projects can sometimes be unexpected and costly.
          That’s why we offer flexible financing options to help you get the
          work you need done without financial stress.
        </div>

        <div className="text-3xl text-center">Why choose Steel Country? </div>
        <div className="text-3xl text-center">Contact us today</div>
        <div className="text-center p-10 rounded-xl text-2xl border-40 border-[#A1B28E] mr-5 flex flex-col justify-evenly h-full">
          Our experienced team conducts expert
          evaluations and provides professional insights tailored to your needs.
          We use only the best materials to ensure long-lasting, durable
          results. With Steel Country, you can enjoy peace of mind knowing that
          your home is in good hands. We are here to help protect and restore
          your home. No matter what your home needs, you can trust Steel Country
          for reliable, quality work.
        </div>

        <div className="text-center p-10 rounded-xl text-2xl border-40 border-[#A1B28E] flex flex-col justify-evenly h-full">
          Location: 106 Carmel Dr., Cibolo, TX
          <br />
          <br />
          Phone: (210) 627-3105
          <br />
          <br />
          Email: manncarter33@cloud.com
        </div>
      </div>

      <br />
      <Footer />
    </div>
  );
}
