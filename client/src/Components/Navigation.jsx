import React, { useState } from "react";
import "./Navigation.css";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="navigation-component">
      <div className="navigation-container">
        <div className="logo-container">
          <a href="/">
            <span role="img" aria-label="Party Popper Emoji" className="logo">
              &#x1F389;
            </span>{" "}
            SATX Bounce
          </a>
        </div>

        <nav>
          <ul className={`nav-menu ${mobileMenuOpen ? "nav-menu-mobile" : ""}`}>
            <li>
              <a className="navitem" href="/about/">
                About
              </a>
            </li>
            <li>
              <a className="navitem" href="/blogs/">
                Blogs
              </a>
            </li>
            <li>
              <a className="navitem" href="/#inventory-component">
                Inventory
              </a>
            </li>
            <li>
              <a className="navitem" href="/faq/">
                FAQ
              </a>
            </li>
            <li>
              <a className="navitem" href="/#contact-form">
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleMobileMenuToggle}>
            {mobileMenuOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
