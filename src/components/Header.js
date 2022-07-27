import React from 'react'
import { NavLink } from 'react-router-dom'//Navlink by default gives "active" class   
import Navbar from './Navbar'
import styled from 'styled-components'
const Header = () => {
  return (
    <>
      <Mainheader>
        <NavLink  to="/"><span>SHAHZAIB BLOG</span></NavLink>
        <Navbar/>
      </Mainheader>  
    </>
  )
}

const Mainheader=styled.header`
display:flex;
justify-content:space-between;
align-items:center;
background-color:${({theme})=>theme.colors.bg};
padding:0 4.8rem;
height:10rem;


span{
  
  font-size:3rem;
  font-weight:900;
}
`

export default Header