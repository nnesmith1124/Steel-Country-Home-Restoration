import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zipCode: "",
    service: "",
    message: "",
  });
    const [service, setService] = useState([]);
    const [selectedService, setSelectedService] = useState("");

    useEffect(() => {
      const fetchServices = async () => {
        try {
          const response = await axios.get("http://localhost:8080/api/services");
          
          setService(response.data.result);
        
        } catch (error) {
          console.error("Error fetching services:", error);
        }
      };
      fetchServices();
    }, );

    const handleChange = (e) => {
      setSelectedService(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus({
        submitted: false,
        success: false,
        message: "",
      });

      const selectedServiceObj = service.find(
        (serviceItem) => serviceItem._id === selectedService
      );
    
      // If the service is found, get the name
      const selectedServiceName = selectedServiceObj ? selectedServiceObj.name : "";
    
      const formData = {
        name,
        phone,
        email,
        zipCode,
        service: selectedServiceName,  // Send the service name
        message,
      };

      try {
        const response = await axios.post(
          "http://localhost:8080/api/inquiries",
          formData
        );

        // Reset form on success
        setFormData({
          name: "",
          phone: "",
          email: "",
          zipCode: "",
          service: "",
          message: "",
        });

        setSubmitStatus({
          submitted: true,
          success: true,
          message: "Thank you! Your inquiry has been submitted successfully.",
        });
      } catch (error) {
        console.error("Error submitting form:", error);

        setSubmitStatus({
          submitted: true,
          success: false,
          message:
            "There was an error submitting your inquiry. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div>
        <NavBar />
        <div className="bg-[#A1B28E]">
          <br />
          <h2 className="text-2xl text-center text-white">
            {" "}
            Rustic Oak Home Restoration
          </h2>
          <h1 className="text-6xl text-center text-white">Contact Us</h1>
          <br />
          <div className=" grid grid-cols-2">
            <form
              className="text-center ml-auto mr-auto w-100 h-100 flex flex-col justify-around bg-[#D3D3D3] shadow-2xl rounded-xl mb-5"
              onSubmit={handleSubmit}
            >
              <div>
                <h3>Send Inquiry</h3>
                <br />
                <input
                  className="shadow-2xl bg-[#ffffff] p-3 placeholder-[#4C7A5B] text-[#4C7A5B]"
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="shadow-2xl bg-[#ffffff] p-3 placeholder-[#4C7A5B] text-[#4C7A5B]"
                  type="tel"
                  id="phone"
                  value={phone}
                  placeholder="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="shadow-2xl bg-[#ffffff] p-3 placeholder-[#4C7A5B] text-[#4C7A5B]"
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Email Adress"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="shadow-2xl bg-[#ffffff] p-3 placeholder-[#4C7A5B] text-[#4C7A5B]"
                  type="text"
                  id="zip"
                  value={zipCode}
                  placeholder="Zip Code"
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
              <div>
                <select
                  className="shadow-2xl bg-[#ffffff] p-3 w-52 text-[#4C7A5B]"
                  name="service"
                  id="services"
                  onChange={handleChange}
                  value={selectedService}
                >
                  <option value="" disabled hidden>
                    Service
                  </option>
                  {service.map((service, index) => (
                    <option key={index} value={service._id}>
                      {" "}
                      {service.name}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <textarea
                  className="shadow-2xl bg-[#ffffff] placeholder-[#4C7A5B] text-[#4C7A5B]"
                  id="message"
                  value={message}
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                className="border w-15 ml-auto mr-auto bg-[#A1B28E] shadow-2xl hover:bg-[#4C7A5B]"
                type="submit"
                disabled={isSubmitting}
              >
                Send
              </button>
              {/* Show status message */}
              {status && <p>{status}</p>}
            </form>

            <div className="text-center p-10 rounded-xl text-2xl border-40 border-[#A1B28E] flex flex-col justify-between h-full text-white">
              <div className="text-3xl text-center">Contact Details</div>
              <div>Location: 106 Carmel Dr., Cibolo, TX </div>
              <div>Phone: (210) 627-3105 </div>
              <div>Email: manncarter33@cloud.com </div>
            </div>
            <br />
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default ContactForm;
