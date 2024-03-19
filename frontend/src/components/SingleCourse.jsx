import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';


const Courses= () => {
  var params = useParams();
  var [course, setCourse] = useState({});

  

  const navigate = useNavigate();
  if(!Object.keys(course).length) {
  axios.get('http://localhost:4000/api/v1/courses/'+params.courseId).then((data) => {
    setCourse(data.data.course);
      }).catch((error) => {
        toast.error(error);});
      }
  const buyCourse = async () => {
    try {
      const username = localStorage.getItem("username");
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/purchases",
        { courseId: params.courseId, username, hostedBy: course.hostedBy, date: new Date() },
        {
          headers: {
            "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          }
        }
      );
      toast.success('Course purchased successfully.')
      } catch (error) {
        toast.error(error);
      }
  }
  return (
    <section className="courses">
      <div className="single-course-header">
        <div>
      <img src={course.courseImageUrl} />
      </div>
      <div className="course-main">
        <div className="course-main-left">
      <h1>{ course.courseName }</h1>
              <ul>
                <li>Duration: {course.duration}</li>
                <li>Cost: {course.cost}</li>
              </ul>
              </div>
              <div className="course-main-right">
                <button onClick={buyCourse}>Buy Course</button>
                </div>
              </div>
      </div>
      <div key={course._id}>
              <p>{course.courseDescription}</p>
              </div>
    </section>
  );
};

export default Courses;