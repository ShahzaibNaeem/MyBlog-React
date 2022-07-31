import styled from "styled-components";

export const Button=styled.button`
padding:1.4rem 2.4rem;
background-color:${({theme})=>theme.colors.btn};
color:${({theme})=>theme.colors.white};
max-width:auto;
border:none;
text-transform: uppercase;
cursor:pointer;
transition:all 0.3s ease 0s;
font-size:1.8rem;

&:hover,&:active{
    transform:scale(96%);
    box-shadow:${({theme})=>theme.colors.shadowSupport}
}


`
