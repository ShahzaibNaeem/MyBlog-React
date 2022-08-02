import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import GlobalContext from '../context/app/GlobalContext.js'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
  const {updateHomePage}=GlobalContext();

  useEffect(() => {
    updateHomePage()
    // eslint-disable-next-line
  }, [])

  return (
    <>
        <HeroSection />
        <Services/>
        <Contact/>
    </>
  )
}

export default Home