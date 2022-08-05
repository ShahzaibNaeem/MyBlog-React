import { createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  html{
     font-size:62.5% ;  /*rem uses html root element font size we are overwriting it to 10px  */
     overflow-x:hidden;
  }
  body{
   overflow-x:hidden;
  }

  ::-webkit-scrollbar{
    width:1.5rem;
  }
  ::-webkit-scrollbar-track{
    background-color:#efefef;
  }
  ::-webkit-scrollbar-thumb{
   background-image:${({theme})=>theme.colors.gradient}
  }
  ::-webkit-scrollbar-thumb{
   background-image:black
  }

  h1{
     color:${({theme})=>theme.colors.heading}; /*Destructuring in the parameters */
     font-size:6rem;
     font-weight:900;
  }

  h2{
     color:${({theme})=>theme.colors.heading}; 
     font-size:4.4rem;
     font-weight:300;
     white-space:normal;
     text-align:center
  }

  h3{
     color:${({theme})=>theme.colors.heading}; 
     font-size:1.8rem;
     font-weight:400;
  }

  p{
     color:${({theme})=>theme.colors.text}; 
     font-size:1.65rem;
     font-weight:400;
     line-height:1.5;
     margin-top:1rem;
  }

  a{
     text-decoration:none;
     font-size:1.8rem;
  }

  li{
     list-style:none;
  }

  input,textarea{
   max-width:100rem;                /* to overwrite default input and textarea size */
   color:${({theme})=>theme.colors.black};
   padding:1.6rem 2.4rem;
   border:1px solid ${({theme})=>theme.colors.border};
   text-transform:uppercase;
   box-shadow:${({theme})=>theme.colors.shadowSupport}
  }
                     /* ---------Reusable Classes------- */
  .container{
     max-width:120rem;
     margin:auto;
  }
  .grid{
   display:grid;
   gap:9rem;
  }
  .grid-two-column{
   grid-template-columns:repeat(2,auto);
  }
  .grid-three-column{
   grid-template-columns:repeat(3,auto);
  }
  .grid-four-column{
   grid-template-columns:1fr 1.2fr .5fr .8fr;
  }
  .common-heading{
   font-size:3.8rem;
   font-weight:600;
   margin-bottom:6rem;
   text-transform:uppercase;
  }

   /* ----Media Querires for Tab 998px---- */
   @media (max-width:${({theme})=>theme.media.tab}){
      .container{
         padding:0 3.2rem;          /* propert is inherited to mobiled Query auto */
      }
      .grid-three-column{
        grid-template-columns:repeat(2,auto);
      }
      .grid-four-column{
        grid-template-columns:repeat(2,auto);
      }
   }

    /* ----Media Querires for Mobile 786px---- */
  @media (max-width:${({theme})=>theme.media.mobile}){
      html{
         font-size:50%;
      }
      .grid{
         gap:3.2rem;
      }
      .grid-two-column, .grid-three-column,.grid-four-column{
         grid-template-columns:1fr;
      }
   }

`