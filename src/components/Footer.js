import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import {FaInstagram,FaFacebook,FaYoutube} from 'react-icons/fa'

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
                     {/* --Column 1--  */}
          <div className="footer-about">
            <h3>Shahzaib Naeem</h3>
            <p>I'm Shahzaib & This is my website to keep you uptodate about myself</p>
          </div>
                    {/* --Column 2--  */}
          <div className="footer-follow">
            <h3>Follow to get Important Updates</h3>
            <form action="#">
            <input readOnly type="text" value="facebook.com/rockman34" />
            </form>
            <a href="https://www.facebook.com/rockman34" target="_blank" rel="noreferrer"><Button>Follow</Button></a>
          </div>
                     {/* --Column 3--  */}
          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social-icons">
              <div>
              <a href="https://www.instagram.com/shahzaibnaem/" target="_blank" rel="noreferrer">
              <FaInstagram className='icons'/>
              </a>
              </div>
              <div>
              <a href="https://www.facebook.com/rockman34" target="_blank" rel="noreferrer">
              <FaFacebook className='icons'/>
              </a>
              </div>
              <div>
              <a href="https://www.youtube.com/channel/UCcAdhe_mUd2ARx3EJYfN1Wg/featured" target="_blank" rel="noreferrer">
              <FaYoutube className='icons'/>
              </a>
              </div>
            </div>
          </div>
                      {/* --Column 4--  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+92 3364609599</h3>
          </div>           
        </div>  

        <div className="footer-bottom-section">
          <hr />
          <div className="container grid grid-two-column">
            <p>{new Date().getFullYear()} Shahzaib Blog. All Rights Reserved</p>
          <div>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
          </div>
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
.footer-social-icons{
  display:flex;
  gap:2rem;
div{
    padding:1rem;
    border-radius:50%;
    border:0.2rem solid ${({theme})=>theme.colors.white};
  }
.icons{
 color:${({theme})=>theme.colors.white};
 font-size:2.4rem;
 cursor:pointer;
 position:relative
}
}

.footer-contact{
  h3{
    color:${({theme})=>theme.colors.hr};
  }
}

.footer-bottom-section{
  padding-top:9rem;
  hr{
    margin-bottom:2rem;
    color:${({theme})=>theme.colors.hr};
    height:0.1rem;
  }
}



`

export default Footer