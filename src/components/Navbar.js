import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CgMenu,CgCloseR } from "react-icons/cg";
import GlobalContext from '../context/app/GlobalContext';


const Navbar = () => {
  const {OpenMenu,setOpenMenu}=GlobalContext()
  return (
    <>
    <Nav>
       <div className={`menuIcon ${OpenMenu?"active":""}`}>
        <ul className="navbar-list">
         <li><NavLink to="/" className="navbar-link" onClick={()=>setOpenMenu(false)}>Home</NavLink></li>
         <li><NavLink to="/about" className="navbar-link" onClick={()=>setOpenMenu(false)}>About</NavLink></li>
         <li><NavLink to="/services" className="navbar-link" onClick={()=>setOpenMenu(false)}>Services</NavLink></li>
         <li><NavLink to="/contact" className="navbar-link" onClick={()=>setOpenMenu(false)}>Contact</NavLink></li>
        </ul>
       
        <div className="mobile-navbar-btn">
          <CgMenu name="menu-outline" className='mobile-nav-icons' onClick={()=>setOpenMenu(true)}/>
          <CgCloseR name="close-outline" className='close-outline mobile-nav-icons' onClick={()=>setOpenMenu(false)}/>
        </div>
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

 /* -------------------mobile Navbar CSS------------- */
 .mobile-navbar-btn{
  display:none;
 }
 .mobile-navbar-btn[name="close-outline"]{
  display:none;
 }
 @media (max-width:${({theme})=>theme.media.mobile}){
.mobile-navbar-btn{
  display:inline-block;
  z-index:100;
 }
 .close-outline{
  display:none;
 }
 .mobile-nav-icons{
  font-size:4.2rem;
  color:${({theme})=>theme.colors.black};
 }
  /* ----hide the navbar--- */
  .navbar-list{
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-color:#fff;
    transform:translateX(100%);
    display:flex;                /*For temporarily setting the UI initially*/
    flex-direction:column;
    align-items:center;
    justify-content:center; 
    display:none;               /* To Hide initially from left side*/
    .navbar-link{
     &:link,&:visited{                 /*Doing this because of CSS Specific property*/
    font-size:4.2rem;                  /*Overwriting the Normal Navbar values*/       
  }
   &:hover,&:active{
    color:${({theme})=>theme.colors.helper}
  }
  }
  }
  
  .active .mobile-nav-icons{
    display:none;
    font-size:4.2rem;
    position:absolute;
    top:3%;
    right:10%;
    color:${({theme})=>theme.colors.black};
    z-index:9999;
  }
  .active .close-outline{
    display:inline-block;
  }
  .active .navbar-list{
   display:flex;
   opacity:1;
   transform:translateX(0%);
   z-index:999;                     /*Goes on Top because of z-index */
  }

 }


`

export default Navbar