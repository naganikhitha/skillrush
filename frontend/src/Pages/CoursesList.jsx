import React from 'react'

import Courses from '../components/Courses'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const CoursesList = () => {
  return (
    <>
     <Navbar />
    <div className='bg-section'>
     <Courses/>
     </div>
     <Footer/>

   
    </>
  )
}

export default CoursesList