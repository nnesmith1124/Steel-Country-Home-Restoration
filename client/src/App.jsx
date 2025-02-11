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
        <Route path="/services" element={<Services />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gutters" element={<Gutters />} />
        <Route path="/roofing" element={<Roofing />} />
        <Route path="/painting" element={<Painting />} />
        {/* Protected Routes */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
