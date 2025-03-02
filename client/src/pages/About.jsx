import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { FaHome, FaCheck, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <div className="relative">
        <img
          className="w-full h-64 md:h-96 object-cover"
          src="../assets/cover-photo.png"
          alt="Steel Country Home Restoration"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center text-3xl font-bold text-[#4C7A5B] mb-4">
            <FaHome className="mr-3" />
            <h2>Welcome to Steel Country Home Restorations</h2>
          </div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            We're dedicated to restoring and enhancing your home with top-quality services that you can trust.
            Serving all of South Texas, including San Antonio, Corpus Christi, and the Rio Grande Valley.
          </p>
        </div>

        {/* Our Values and Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.01]">
            <div className="bg-[#4C7A5B] text-white p-4">
              <h3 className="text-2xl font-bold text-center">Our Mission</h3>
            </div>
            <div className="p-6 text-gray-700">
              <p className="mb-4">
                At Steel Country Home Restorations, we are dedicated to restoring and
                enhancing your home with top-quality services that you can trust.
                Located in Cibolo, TX, we proudly serve all of South Texas, including
                San Antonio, Corpus Christi, the Rio Grande Valley, and surrounding
                areas.
              </p>
              <p>
                Whether you're in need of roofing, drywall, painting, pressure
                washing, gutters, soffit, fascia, or interior renovations, our skilled
                team is here to help. We specialize in a wide range of home
                restoration services, including roofing (repairs, installations, and
                inspections), drywall (repairs, installations, and finishing),
                painting (interior and exterior), pressure washing (restoring your
                home's exterior), gutters, soffit & fascia (installations and
                repairs), interior renovations (transforming your living space), and
                roofing repairs (quick fixes for any roofing issues).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.01]">
            <div className="bg-[#4C7A5B] text-white p-4">
              <h3 className="text-2xl font-bold text-center">Our Values</h3>
            </div>
            <div className="p-6 text-gray-700">
              <p className="mb-4">
                We believe in providing value at every step. That's why we offer
                complimentary inspections to assess the condition of your roof and
                other home areas. Our expert inspectors look for early-stage
                deterioration, potential leak points, and structural issues before
                they become major problems.
              </p>
              <p>
                Additionally, we offer insurance claim assistance to help navigate
                through the process with ease. Our team will provide detailed
                documentation and professional insights to ensure that you receive
                the coverage you deserve. We understand that home restoration
                projects can sometimes be unexpected and costly. That's why we
                offer flexible financing options to help you get the work you
                need done without financial stress.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-center text-[#4C7A5B] mb-8">Why Choose Steel Country?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-[#4C7A5B] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaCheck className="text-xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
              <p className="text-gray-600">Our experienced professionals conduct thorough evaluations and provide insights tailored to your needs.</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-[#4C7A5B] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaCheck className="text-xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality Materials</h4>
              <p className="text-gray-600">We use only the best materials to ensure long-lasting, durable results for your home.</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-[#4C7A5B] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaCheck className="text-xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Peace of Mind</h4>
              <p className="text-gray-600">With Steel Country, you can relax knowing that your home is in good hands.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#4C7A5B] text-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-6">Contact Us Today</h3>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <FaMapMarkerAlt className="text-4xl mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Location</h4>
                  <p>106 Carmel Dr., Cibolo, TX</p>
                </div>

                <div className="flex flex-col items-center">
                  <FaPhoneAlt className="text-4xl mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Phone</h4>
                  <a href="tel:2106273105" className="hover:underline">(210) 627-3105</a>
                </div>

                <div className="flex flex-col items-center">
                  <FaEnvelope className="text-4xl mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Email</h4>
                  <a href="mailto:manncarter33@cloud.com" className="hover:underline">manncarter33@cloud.com</a>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block bg-white text-[#4C7A5B] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  Get A Free Estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}