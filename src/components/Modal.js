import React,{useState,useRef} from 'react';
import ReactModal from 'react-modal';
import { Button } from '../styles/Button'

const Modal = () => {
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
        console.log(modalimage.current);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
      return (
        <div>
          <button onClick={openModal}>Open Modal</button>
          <ReactModal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
          <div className="modal-page" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"4rem"}}>
           <img ref={modalimage} src="./images/sent.svg" alt="Thank You!" />
          
           <div style={{textAlign:"center"}}>
           <h3>CONGRATULATIONS!</h3>
           <p>You have submitted the response. Will contact you shortly </p>
            <Button style={{fontSize:"1.4rem",marginTop:"2rem"}} onClick={closeModal}>close</Button>
            </div>
           </div>
          </ReactModal>
        </div>
      );
    }

export default Modal


// <img ref={modalimage} src="./images/sent.svg" alt="Thank You!" />
//         <h3 ref={modalheading}>CONGRATULATIONS!</h3>
//         <p ref={modalpara}>You have submitted the response. Will contact you shortly </p>
//         <Button ref={modalbtn} onClick={closeModal}>close</Button>