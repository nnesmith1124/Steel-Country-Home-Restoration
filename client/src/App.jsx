import React from 'react'
import "/App.css";
import Navbar from "/components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Services from "../components/Services";
//import ServicesPage from "./pages/services";
import Contact from "./pages/contact";
import Inquiry from "./components/inquiry";
import Login from "./pages/login";

//import Services from "../components/Services";
import ServicesAdmin from "../components/ServicesAdmin";


export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/services"
                    element={<ServicesPage />}
                />
                <Route
                    path="/inquiry"
                    element={<Inquiry />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route
                    path="/login"
                    element={<Login/>}
                />
            </Routes>
        </Router>
    // <div>
    //   <h1>Steel Country Home Restoration</h1>
    //   <Services />
    //   <ServicesAdmin />
    // </div>

);
}

