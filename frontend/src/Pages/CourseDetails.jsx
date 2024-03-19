import React from 'react'

import SingleCourse from '../components/SingleCourse'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const CourseDetails = () => {
  return (
    <>
     <Navbar />
    <div className='bg-section'>
     <SingleCourse/>
     </div>
     <Footer/>

   
    </>
  )
}

export default CourseDetails