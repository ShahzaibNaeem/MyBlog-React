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
     margin-top:1rem
  }

  a{
     text-decoration:none;
     font-size:1.8rem;
  }

  li{
     list-style:none;
  }

  input,textarea{
   max-width:100rem;
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
  .common-heading{
   font-size:3.8rem;
   font-weight:600;
   margin-bottom:6rem;
   text-transform:uppercase;
  }

`