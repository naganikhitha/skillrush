import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
     <HeroSection/>
     <About/>
     <Qualities/>
     <Team/>
     <Reservation/>
     <Menu/>
     <WhoAreWe/>
     <Footer/>

   
    </>
  )
}

export default Home