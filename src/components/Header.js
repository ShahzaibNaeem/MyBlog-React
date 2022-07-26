import React from 'react'
import { NavLink } from 'react-router-dom'//Navlink by default gives "active" class   
import Navbar from './Navbar'
const Header = () => {
  return (
    <>
      <header>
        <NavLink  to="/"><h3>Shahzaib Naeem</h3></NavLink>
        <Navbar/>
      </header>  
    </>
  )
}

export default Header