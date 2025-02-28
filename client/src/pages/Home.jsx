import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Slideshow from "../Components/Slideshow";

const HERO_IMAGE = "../assets/cover-photo.png";

const testimoials = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    name: "Jane Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    name: "John Smith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 4,
    name: "Jane Smith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section with Cover Photo */}
      <div className="relative">
        <img
          className="w-full h-auto object-cover"
          src={HERO_IMAGE}
          alt="Steel Country Home Restoration"
        />
        <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Quality Home Restoration</h1>
            <p className="text-xl md:text-2xl mb-6">Professional services for your home improvement needs</p>
            <a
              href="/contact"
              className="bg-[#4C7A5B] hover:bg-[#3a5e45] text-white py-2 px-6 rounded-lg text-lg transition duration-300"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 text-center mb-8">
            Offering roofing, drywall, painting, pressure washing, gutters, soffit,
            fascia, interior renovations, and roofing repairs. Complimentary
            inspections, insurance claim help, and flexible financing available.
            Quality work to restore and enhance your home!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-[#4C7A5B]">Roofing</h3>
              <p>Complete roofing services including installations, repairs, and maintenance for all types of roofs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-[#4C7A5B]">Painting</h3>
              <p>Interior and exterior painting services with premium materials for a fresh, lasting finish.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-[#4C7A5B]">Gutters</h3>
              <p>Installation and repair of gutters, soffit, and fascia to protect your home from water damage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8">Helpful Tips</h2>
        <div className="max-w-4xl mx-auto">
          <Slideshow />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 md:px-12 bg-[#4C7A5B] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Home?</h2>
          <p className="text-lg mb-6">Contact us today for a free inspection and estimate on your home restoration project.</p>
          <a
            href="/contact"
            className="bg-white text-[#4C7A5B] hover:bg-gray-100 py-3 px-8 rounded-lg text-lg font-medium transition duration-300 inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Testimonials*/}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8">Customer Testimonials</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimoials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <p className="text-lg mb-4">{testimonial.text}</p>
                <p className="text-lg font-semibold text-[#4C7A5B]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}