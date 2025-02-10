import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          {/* // logo home link  */}
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/services'>Contact</NavLink>
          <NavLink to='/inquiry'>Inquiry</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}
export default Navbar
