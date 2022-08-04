import React,{useState,useRef,useEffect}  from 'react'
import ReactModal from 'react-modal';
import styled from 'styled-components'
import GlobalContext from '../context/app/GlobalContext';
import { Button } from '../styles/Button'

const Contact = () => {
  const {setProgress}=GlobalContext();
  // ---------------Modal CSS ,Hooks and Functions------------
  const openmodal=useRef(null);
  const closemodal=useRef(null);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const modalimage=useRef(null)

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    modalimage.current.style.maxWidth="60%";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // -------------------Contact Form CSS ,Hooks and Functions------------
  useEffect(() => {
    setProgress(100);
    // eslint-disable-next-line
  }, [])
  
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
    openmodal.current.click();
    setTimeout(()=>{
   closemodal.current.click();
    },10000)
  }
  return (
    <>
    {/* ---------------------Modal Componenet------------- */}
     <div>
          <button ref={openmodal} style={{display:'none'}} onClick={openModal}>Open Modal</button>
          <ReactModal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false} >
          <div className="modal-page" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"4rem"}}>
           <img ref={modalimage} src="./images/sent.svg" alt="Thank You!" />
          
           <div style={{textAlign:"center"}}>
           <h3>CONGRATULATIONS!</h3>
           <p>You have submitted the response. Will contact you shortly </p>
            <Button ref={closemodal} style={{fontSize:"1.4rem",marginTop:"2rem"}} onClick={closeModal}>close</Button>
            </div>
           </div>
          </ReactModal>
       </div>

    {/* ---------------------Contact Form component------------- */} 
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
 .btn{
 &:hover{
  background-color:rgba(0, 0, 0, 0);
  border:1px solid ${({theme})=>theme.colors.btn};
  color:${({theme})=>theme.colors.btn};
 }
 }
`

export default Contact