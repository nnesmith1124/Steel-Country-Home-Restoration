import React from "react";
import {
  nav,
  navLink,
  bars,
  navMenu,
  navBtn,
  navBtnLink,
} from "/NavbarElements";

const NavBar = () => {
  return (
    <>
      <nav>
        <bars />
        <navMenu>
          {/* // logo home link  */}
          <navlink to="/">Home</navlink>
          <navlink to="/about">About</navlink>
          <navlink to="/services">Contact</navlink>
          <navlink to="/inquiry">Inquiry</navlink>
          <navlink to="/contact">Contact</navlink>
          <navlink to="/login">Login</navlink>
        </navMenu>
        <navBtn>
          <navBtnLink to="/login">Login</navBtnLink>
        </navBtn>
      </nav>
    </>
  );
};
export default NavBar;
