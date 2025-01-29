import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import the BrowserRouter, Routes, and Route components from react-router-dom

import Services from "../pages/Services"; // import the Services page

export default function App() {
  return (
    <div>
      <h1>Steel Country Home Restoration</h1>
      <Services />
    </div>
  );
}
App();
