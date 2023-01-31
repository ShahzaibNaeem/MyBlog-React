import React,{useEffect} from 'react'
import styled from 'styled-components';
import GlobalContext from '../context/app/GlobalContext'
import { Button } from '../styles/Button';
import Typewriter from 'typewriter-effect';
const services = [
  {
  "id": 1,
  "title": "React JS",
  "image": "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "description": "React is a declarative, efficient, and flexible JavaScript library for building user interfaces created by facebook. It lets you compose complex UIs from small and isolated pieces of code .",
  "link":"https://reactjs.org/"
  },
  {
  "id": 2,
  "title": "Node JS",
  "image": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  "description": "Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript",
  "link":"https://nodejs.org/en/"
  },
  {
  "id": 3,
  "title": "Express JS",
  "image": "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "description": "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open source framework .",
  "link":"https://expressjs.com/"
  },
  {
  "id": 4,
  "title": "Mongo DB",
  "image": "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "description": "MongoDB is an open-source document-oriented database. MongoDB has been adopted as backend software by a number of major websites including EA, Adobe, eBay e.t.c",
  "link":"https://www.mongodb.com/"
  },
  {
  "id": 5,
  "title": "Adobe Photoshop",
  "image": "https://images.pexels.com/photos/6155010/pexels-photo-6155010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "description": "Adobe Photoshop is a most popular photo editing and raster graphic design software which allows users to create, edit, and manipulate various graphics as well as digital art. ",
  "link":"https://www.adobe.com/products/photoshop.html"
  },
  {
  "id": 6,
  "title": "Adobe Premiere Pro",
  "image": "https://images.pexels.com/photos/5054208/pexels-photo-5054208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "description": "Adobe Premiere Pro is a software application for video editing from Adobe Systems. Premiere Pro is used for editing videos, commercials and other film, television, and online video",
  "link":"https://www.adobe.com/products/illustrator.html"
  }
  ]
  
const Services = () => {
  const {setProgress}=GlobalContext();
   console.log(services)
  useEffect(() => {
    document.title="Services | Shahzaib Blog";
    setProgress(100);
     // eslint-disable-next-line
  }, [])
  
  return (
    <>
     <Wrapper>
       <div className="section">
         <h2 className="common-heading"><Typewriter
                    options={{
                      strings: ['Services', 'Technologies'],
                      autoStart: true,
                      loop: true
                    }}
                  /></h2>
         <div className="container grid grid-three-column">
          {
            services.map((element)=>{
              const {id,title,image,description,link}=element;
              return <div className="card" key={id}>
                <figure>
                <img src={image} alt={title} />
                 </figure>
                 <div className="card-data">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={link} target="_blank" rel="noreferrer"><Button className='btn'>Read More</Button></a>
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
background-color:${({theme})=> theme.colors.bg};

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
  margin:auto;
  margin:2rem auto;
  border:0.1rem solid rgb(93 84 243); 
  color:rgb(93 84 243);
  background-color:#fff;
  font-size: 1.4rem;
  &:hover{
   color:  #fff;
   background-color:rgb(93 84 243);
  }
}





`

export default Services