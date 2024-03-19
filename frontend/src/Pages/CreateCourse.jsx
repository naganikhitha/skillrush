import React from 'react'

import Coursesform from '../components/Coursesform'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const CreateCourse = () => {
  return (
    <>
     
      <Navbar />
    <div className='bg-section'>
     <Coursesform/>
    </div> 
     <Footer/>

   
    </>
  )
}

export default CreateCourse