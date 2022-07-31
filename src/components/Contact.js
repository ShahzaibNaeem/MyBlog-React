import React  from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'

const Contact = () => {
  const navigate =useNavigate()

  const handleSubmit =async (e) =>{
    e.preventDefault();
    const data= new FormData(e.target)
    const response= await fetch("https://formspree.io/f/xoqbaern" , {
      method: "POST",
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    })
    await response.json();
    navigate('/');
  }
  return (
    <>
    <Wrapper>
      <h2 className='common-heading'>Feel Free to Contact Me</h2>
      <iframe title="mapFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26876.80303602578!2d74.2139504!3d32.643463950000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f0284910ac0a5%3A0x949e5f51042f13bf!2sJalalpur%20Jattan%2C%20Gujrat%2C%20Punjab!5e0!3m2!1sen!2s!4v1659251190692!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
        <form  onSubmit={handleSubmit}>
          <input type="text" name="Username" placeholder='Username' autoComplete='off' minLength="3" required/>
          <input type="email" name="Email" placeholder='Email' autoComplete='off' required/>
          <textarea name="Message"  cols="30" rows="10" autoComplete='off' minLength="5" required/>
          <Button className='btn'>Submit</Button>
        </form>
        </div>
      </div>
    </Wrapper>
    </>
  )
}

const Wrapper=styled.section`
 padding: 9rem 0rem;
 .container{
  margin-top:6rem;
  text-align:center;
 }
 .contact-form{
  max-width:50rem;
  margin:auto
 }
 form{
  display:flex;
  flex-direction:column;
  gap:3rem;
 }
 .btn:hover{
  background-color:rgba(0, 0, 0, 0);
  border:1px solid ${({theme})=>theme.colors.btn};
  color:${({theme})=>theme.colors.btn};
 }
`

export default Contact