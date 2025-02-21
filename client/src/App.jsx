import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";
import Login from "./pages/Login";
import Admin from "./pages-admin/AdminHome";
import ServicePage from "./components-services/ServicePage";
import AdminServices from "./pages-admin/AdminServices";
import AddService from "./pages-admin/AddService";
import UpdateService from "./pages-admin/UpdateService";
import AdminInquiries from "./pages-admin/AdminInquiries";
import AdminLogout from "./pages-admin/AdminLogout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Display available services to users */}
        <Route path="/services" element={<Services />} />
        {/* to get free estimate */}
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service/:name" element={<ServicePage />} />
        {/* Protected Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/services" element={<AdminServices />} />
        <Route path="/admin/services/add-service" element={<AddService />} />
        <Route
          path="/admin/services/update-service"
          element={<UpdateService />}
        />
        <Route path="/admin/inquiries" element={<AdminInquiries />} />
        <Route path="/admin/logout" element={<AdminLogout />} />
      </Routes>
    </Router>
  );
}
