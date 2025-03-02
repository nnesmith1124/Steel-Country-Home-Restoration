import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !zipCode || !message) {
      setStatus('Please fill out all fields');
      return;
    }

    setStatus("Thank you for contacting us, We'll reach back soon!");

    // Reset form fields
    setName('');
    setPhone('');
    setEmail('');
    setZipCode('');
    setMessage('');
  };

  return (
    <div>
      <NavBar />
    <div className="bg-[#A1B28E]">
      <br />
      <h2 className="text-2xl text-center"> Steel Country Home Restoration</h2>
      <h1 className="text-6xl text-center">Contact Us</h1>
      <br />
      <div className=" grid grid-cols-2">
      
      <form className="text-center ml-auto mr-auto w-100 h-100 flex flex-col justify-around bg-[#D3D3D3] shadow-2xl rounded-xl" onSubmit={handleSubmit}>
        <div> 
          <h3>Send Inquiry</h3>
          <br />
          <input 
            className="shadow-2xl bg-[#ffffff] p-3"
            type="text" 
            id="name" 
            value={name} 
            placeholder="Name"
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <input
            className="shadow-2xl bg-[#ffffff] p-3"
            type="tel" 
            id="phone" 
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)} 
          />
        </div>
        <div>
          <input 
            className="shadow-2xl bg-[#ffffff] p-3"
            type="email" 
            id="email" 
            value={email} 
            placeholder="Email Adress"
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <input
            className="shadow-2xl bg-[#ffffff] p-3"
            type="text"
            id="zip" 
            value={zipCode}
            placeholder="Zip Code"
            onChange={(e) => setZipCode(e.target.value)}  
          />
        </div>
        <div>
          <textarea
            className="shadow-2xl bg-[#ffffff]"
            id="message"
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}  
          />
        </div>
        <button className="border w-15 ml-auto mr-auto bg-[#A1B28E] shadow-2xl hover:bg-[#4C7A5B]" type="submit">Send</button>
        {/* Show status message */}
        {status && <p>{status}</p>}
      </form>

      <div className="text-center p-10 rounded-xl text-2xl border-40 border-[#A1B28E] flex flex-col justify-between h-full ">
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