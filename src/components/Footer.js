import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'

const Footer = () => {
  return (
    <>
       <Wrapper>
       {/* ---------contact footer section--------- */}
        <div className="contact-short">
        <div className='grid grid-two-column'>
          <div className='contact-short-data'>
            <h3>Ready to get started ?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div className='contact-short-link'>
          <NavLink to="/"><Button>Get Started</Button></NavLink>
          </div>
          </div>
        </div>

         {/* -----------footer section-------------  */}
         <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Shahzaib Naeem</h3>
            <p>I'm Shahzaib & This is my website to keep you uptodate about myself</p>
          </div>
          <div className="footer-follow">
            <h3>Follow to get Important Updates</h3>
            <form action="#">
            <input readOnly type="text" value="facebook.com/rockman34" />
            </form>
            <a href="https://www.facebook.com/rockman34" target="_blank" rel="noreferrer"><Button>Follow</Button></a>
          </div>
          {/* --------------In Progress---------- */}
        </div>     
         </footer>
       </Wrapper>
    </>
  )
}
const Wrapper=styled.section`

/* ---------contact footer section CSS -------- */
.contact-short{
  max-width:60%;
  margin:auto;
  padding:5rem 10rem;
  background-color:${({theme})=>theme.colors.bg};
  border-radius:1rem;
  box-shadow:${({theme})=>theme.colors.shadowSupport};
  transform:translate(0, 50%)
}
.contact-short-link{
  text-align:right;
}

button{}

/* ---------footer section CSS -------- */
footer{
  padding: 14rem 0rem;
  background-color:${({theme})=>theme.colors.footer_bg};
  h3{
  color:${({theme})=>theme.colors.hr};    /*Nested bcz we want white color only on footer */   
  margin-bottom: 2.4rem;
  }
  p{
  color:${({theme})=>theme.colors.white}
 }
}

form{
  margin:2rem 0rem;
}


`

export default Footer