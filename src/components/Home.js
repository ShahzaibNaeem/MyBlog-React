import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import GlobalContext from '../context/app/GlobalContext.js'

const Home = () => {
  const {updateHomePage}=GlobalContext();

  useEffect(() => {
    updateHomePage()
    // eslint-disable-next-line
  }, [])

  return (
    <>
        <HeroSection />
    </>
  )
}

export default Home