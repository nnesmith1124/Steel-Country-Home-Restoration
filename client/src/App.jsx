import React from "react";
import "./App.css";
//import Navbar from "./Components/NavbarElements"; //Nick
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Gutters from "./components-services/Gutters";
import Roofing from "./components-services/Roofing";
import Painting from "./components-services/Painting";

export default function App() {
  return (
    <Router>
      {/*       <Navbar /> Nick */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Display available services to users */}
        <Route path="/services" element={<Services />} />
        {/* to get free estimate */}
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gutters" element={<Gutters />} />
        <Route path="/roofing" element={<Roofing />} />
        <Route path="/painting" element={<Painting />} />
        {/* Protected Routes */}
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/admin/services" element={<Admin-Services />} />
        <Route path="/admin/inquiries" element={<Admin-Inquiries />} />
        <Route path="/admin/logout" element={<Admin-Logout />} /> */}
      </Routes>
    </Router>
  );
}
