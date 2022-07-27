import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
    <Nav>
       <div className="menuIcon">
        <ul className="navbar-list">
         <li><NavLink to="/" className="navbar-link">Home</NavLink></li>
         <li><NavLink to="/about" className="navbar-link">About</NavLink></li>
         <li><NavLink to="/services" className="navbar-link">Services</NavLink></li>
         <li><NavLink to="/contact" className="navbar-link">Contact</NavLink></li>
        </ul>
        </div>
     </Nav>
    </>
  )
}

const Nav=styled.nav`
.navbar-list{
  display:flex;
  gap:4.8rem;
}
 .navbar-link{
  &:link,&:visited{                       /* & represents the parent element*/
    color:${({theme})=>theme.colors.black};
    font-size:1.8rem;
    text-transform:uppercase;
    transition:color 0.3s linear           /*specific property transition */
  }
  &:hover,&:active{
    color:${({theme})=>theme.colors.helper}
  }
 }

`

export default Navbar