import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'

const HeroSection = () => {
  return (
    <>
    <Wrapper>
     <div className="container grid grid-two-column">
     {/* /* ----------------------Hero Data------------------- */ }
        <div className="section-hero-data">
        <p className="hero-top-data">THIS IS ME</p>
        <h1 className="hero-heading">SHAHZAIB NAEEM</h1>
        <p className="hero-data">I'm Shahzaib Naeem.A Full Stack Developer ,Photo Editor and a Student.I have graduated from UOG(University of Gujrat).Will be going to share my thoughts on this Blog.</p>
        <Button className='btn contactme-btn'>
        <NavLink to='/contact'>contact me</NavLink>
        </Button>
        </div>

     {/* /* ----------------------Hero Image------------------- */ }
        <div className="section-hero-image">
        <img className="hero-img" src='./images/hero.svg' alt='Hero'/> {/*By default react goes to public folder*/ } 
        </div>
     </div>
    </Wrapper>
    </>
  )
}
const Wrapper=styled.section`
padding:9rem 0rem;

.section-hero-data{
    display:flex;
    flex-direction:column;
    justify-content:center;
}
.hero-top-data{
    text-transform:uppercase;
    font-weight:500;
    color:${({theme})=>theme.colors.helper};
}
.hero-heading{
    text-transform:uppercase;
    font-size:6.4rem;
}
.hero-data{
    margin-top:1.5rem;
    margin-bottom:3.4rem;
    max-width:60rem;
}
.btn{
    max-width:17rem;
}

.section-hero-image{
    display:flex;
    justify-content:center;
}
.hero-img{
    max-width:80%;
}

`
export default HeroSection