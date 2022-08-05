import React,{useEffect} from 'react'
import HeroSection from './HeroSection'
import GlobalContext from '../context/app/GlobalContext.js'

const About = () => {
  const {updateAboutPage}=GlobalContext();
  useEffect(() => {
    document.title="About | Shahzaib Blog"
    updateAboutPage();
    // eslint-disable-next-line
  }, [])

  return (
    <>
    <HeroSection />
    </>
  )
}

export default About