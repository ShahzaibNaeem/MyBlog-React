import React from 'react'
import { Button } from '../styles/Button';
import styled from 'styled-components';
const Popup = (props) => {
    const {trigger,setTrigger}=props;
  return (
    <> {trigger &&
     <Wrapper>
        <div className="popup">
            <div className="popup-inner">
            <div className='popup-inner-btn'><Button className="close-btn" onClick={()=>setTrigger(false)} >Close</Button></div>
                <div className="popup-inner-data">
               {props.children}
               </div>
            </div>
        </div>
     </Wrapper>
    }
    </>
  )
}

const Wrapper=styled.section`
.popup{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background-color:rgba(0, 0, 0, 0.2);
    display:flex;
    justify-content:center;
    align-items:center;
}
.popup-inner{
    background-color:#fff;
    width:100%;
    max-width:70rem;
}
.popup-inner-data{
    padding:4rem;
}
.popup-inner-btn{
    display:flex;
    justify-content:right;
}
.close-btn{
    display:block;
    text-align:center;
}
`
export default Popup;