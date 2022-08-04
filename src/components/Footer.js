import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import {FaInstagram,FaFacebook,FaYoutube} from 'react-icons/fa'
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  const [beauty, setbeauty] = useState({level:""})
  const [Click, setClick] = useState(1)

  const handleClick=()=>{
    setClick(Click+1);
    if(Click===1){
      setbeauty({...beauty,level:"super  cute 😋"})
    }
    else if(Click===2){
      setbeauty({...beauty,level:"super duper cute 😍"})
    }
    else if(Click===3){
      setbeauty({...beauty,level:"Exceptional Cute 😘"})
    }
    else if(Click===4){
      setbeauty({...beauty,level:"Let's Repeat 😉"})
      setClick(1);
    }
  }
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
            <h3>How Pretty you are ?</h3>
            <form action="#">
            <input readOnly type="text" value={beauty.level} />
            </form> 
            <Button onClick={handleClick}>Press Me</Button>
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
            <h3><a href="tel:+923364609599">+92 3364609599</a></h3>
          </div>           
        </div>  

        <div className="footer-bottom-section">
          <hr />
          <div className="container grid grid-two-column">
            <p>{new Date().getFullYear()} Shahzaib Blog. All Rights Reserved</p>
          <div>
            <p>PRIVACY POLICY</p>
            <p>MADE WITH <BsFillSuitHeartFill className='footer-bottom-icon'/> BY SHAHZAIB</p>
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

.footer-follow{
form{
  margin:2rem 0rem;
}
button{
  font-size:1.4rem;
}
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
  a{
    color:${({theme})=>theme.colors.hr};
    cursor:pointer;
    &:hover{
      cursor:pointer;
    }
  }
}

.footer-bottom-section{
  padding-top:9rem;
  hr{
    margin-bottom:2rem;
    color:${({theme})=>theme.colors.hr};
    height:0.1rem;
  }
  .footer-bottom-icon{
    transition:all 0.3s ease 0s;
    &:hover{
      color:red;
      transform:scale(90%)
    }
  }
}

   /* ----Media Querires for Tab 998px---- */
  @media (max-width:${({theme})=>theme.media.tab}){
   .contact-short{
   max-width:80vw;
   }
  }

   /* ----Media Querires for Mobile 786px---- */
  @media (max-width:${({theme})=>theme.media.mobile}){
    .contact-short{
      max-width:90vw;
      padding:2rem 0rem;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
    .contact-short-link{
      text-align:center;
      }
    }

    .footer-bottom-section{
      padding-top:3.2rem;
    }


  }



`

export default Footer