import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Courses= () => {
  var [courses, setCourses] = useState([]);

  

  const navigate = useNavigate();
  if(!courses.length) {
  axios.get('http://localhost:4000/api/v1/courses/').then((data) => {
        setCourses(data.data.courses);
      }).catch((error) => {
        toast.error(error);});
      }
  return (
    <section className="courses">
      <div className="courses-header">
      <h1>Courses</h1>
      <button onClick={() => navigate('/create-course')}>Create Course</button>
      </div>
      <div className="courses-list">
      {
          courses
            .map(course => 
              <div key={course._id} onClick={() => navigate('/courses/'+course._id)}>
                <img src={course.courseImageUrl} />
              <h3>{course.courseName}</h3>
              <p>{course.courseDescription}</p>
              <ul>
                <li>Duration: {course.duration}</li>
                <li>Cost: {course.cost}</li>
              </ul>
              </div>
            
            )
        }
      </div>

    </section>
  );
};

export default Courses;