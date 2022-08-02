import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {FaArrowUp} from 'react-icons/fa'

const GotoTop = () => {
  const [isVisible, setisVisible] = useState(false)
    const goToBtn=()=>{
        window.scroll({top:0,left:0,behavior:'smooth'})
    }
    const listentoscroll=()=>{
      const heightToHidden=250;  
      //The Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.
      const winScroll= document.documentElement.scrollTop;
      if(winScroll>heightToHidden){
        setisVisible(true)
      }
      else{
        setisVisible(false)
      }
    }
    useEffect(() => {
      window.addEventListener('scroll',listentoscroll)
      return ()=>window.removeEventListener('scroll',listentoscroll)
    }, [])
    
  return (
    <>
    <Wrapper>
    {isVisible &&
        <div className="top-btn" onClick={goToBtn}>
        <FaArrowUp className='top-btn-icon'/>
        </div>
    }
    </Wrapper>   
    </>
  )
}
const Wrapper=styled.section`
display:flex;
justify-content:center;
align-items:center;

.top-btn{
position:fixed;
bottom:5rem;
right:5rem;
font-size:2.4rem;
color:#fff;
background-color:${({theme})=>theme.colors.btn};
width:6rem;
height:6rem;
box-shadow:${({theme})=>theme.colors.shadowSupport};
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
z-index:10;
cursor:pointer;
}
.top-btn-icon{
    animation:gototop 1.2s linear infinite alternate-reverse;
}
@keyframes gototop{
 0%{
    transform:translateY(-0.5rem);
    };
 100%{
    transform:translateY(0.5rem);
    };
}`

export default GotoTop