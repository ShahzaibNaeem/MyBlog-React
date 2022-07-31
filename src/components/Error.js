import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'

const Error = () => {
  return (
    <>
    <Wrapper>
        <img src="./images/error.svg" alt="404 Not Found"/>
        <Button className='btn'><NavLink to="/">Go Back</NavLink></Button>
    </Wrapper>
    </>
  )
}
const Wrapper=styled.section`
padding: 9rem 0rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:3rem;

`

export default Error