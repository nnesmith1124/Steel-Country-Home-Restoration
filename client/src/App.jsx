import React from 'react'
import "/.App.css";
import Navbar from "/components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Inquiry from "./components/inquiry";
import Login from "./pages/login";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/services"
                    element={<Services />}
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
    );
}
export default App;
