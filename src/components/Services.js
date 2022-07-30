import React from 'react'
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import GlobalContext from '../context/app/GlobalContext'
import { Button } from '../styles/Button';

const Services = () => {
  const {services}=GlobalContext();
  
  return (
    <>
     <Wrapper>
       <div className="section">
         <h2 className="common-heading">Our Services</h2>
         <div className="container grid grid-three-column">
          {
            services.map((element)=>{
              const {id,title,image,description}=element;
              return <div className="card" key={id}>
                <figure>
                <img src={image} alt={title} />
                 </figure>
                 <div className="card-data">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Button className='btn'><NavLink to="/services">Read More</NavLink></Button>
                 </div>
              </div>
            })
          }
         </div>
       </div>
     </Wrapper>
    </>
  )
}

const Wrapper=styled.section`
padding:9rem 0rem;
background-color:#{({theme})=>theme.color.bg}

.card{
  border:0.1rem solid rgba(170,170,170,0.4)
}
.card-data{
  margin:1rem 2rem;
}

figure{
  width:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  overflow:hidden;
  transition:all 0.5s linear;
  cursor:pointer;
  &::after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:0%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.5);
    transition:all 0.2s linear;
  }
  &:hover::after{
    content:"";
    width:100%;
  }
  &:hover img{
    transform:scale(1.2);
  }
  img{
    max-width:90%;
    margin-top:1.5rem;
    height:20rem;                    /*conflict*/
    transition:all 0.2s linear;
  }
}

.btn{
  display:block;
  margin:2rem auto;
  background-color:rgba(0, 0, 0, 0);
  border:0.1rem solid rgb(93 84 243);
  &:hover{
   background-color:  rgb(98 84 243)
  }
  &:hover a{
    color:#fff;
  }
  a{
   font-size:1.8rem;
   color:rgb(98 84 243)
  }
}

`

export default Services