import React from "react";
import {
        nav, 
        navList,
        bars,
        navMenu, 
        navBtn,
        navBtnLink,
} from "/NavBarElements";

const Navbar = () => { 
    return (
        <>
        <nav>
            <bars />
            <navMenu>
                // logo home link 
                <navlink  to="/" >
                Home
                </navlink>
                <navlink  to="/about" >
                About
                </navlink>
                <navlink  to="/services" >
                Contact 
                </navlink>
                <navlink  to="/inquiry" >
                Inquiry
                </navlink>
                <navlink  to="/contact" >
                Contact
                </navlink>
                {/* <navlink to="/login" >
                Login
                </navlink> */}


            </navMenu>
            <navBtn>
                <navBtnLink to="/login">
                    Login
                </navBtnLink>
            </navBtn>
        </nav>
        </>  
)
}
export default Navbar;

        
        
              
    