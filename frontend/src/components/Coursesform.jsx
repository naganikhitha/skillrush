import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Coursesform= () => {
  const [courseName, setCourseName] = useState("");
  const [cost,setCost]=useState("");
  const [duration, setDuration] = useState("");
  var [hostedBy, setHostedBy]=useState("") ;
  const [courseImageUrl, setCourseImageUrl]=useState("");
  const [courseDescription, setCourseDescription]=useState("");

  

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    hostedBy = localStorage.getItem('username')
    console.log('Hosted by is', hostedBy);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/courses/send",
        { courseName,cost,duration, hostedBy,courseImageUrl,courseDescription },
        {
          headers: {
            "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          }
        }
      );
      toast.success(data.message);
      setCourseName("");
      setCost("");
      setDuration("");
      setHostedBy("");
      setCourseImageUrl("");
      setCourseDescription("");
      
      navigate("/courses");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <section className="reservation signin" id="reservation">
      <div className="container">
        <div className="banner">
          <div className="reservation_form_box">
            <h1>Create Course</h1>
           
            <form>
<div>
<input
                  type="DURATION"
                  placeholder="Duration"
                  
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              
              <input
                  type="COST"
                  placeholder="Cost"
                  
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                />
                  
                  </div>         
              <div>
                <input
                  type="COURSE NAME"
                  placeholder="Course name"
                  
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />

              </div>

              <div>
              <input
                  type="COURSE DESCRIPTION"
                  placeholder="Course Description"
                  
                  value={courseDescription}
                  onChange={(e) => setCourseDescription(e.target.value)}
                />
              </div>

              <div>
              <input
                  type="COURSE IMAGE URL"
                  placeholder="Course Imagae  Url"
                  
                  value={courseImageUrl}
                  onChange={(e) => setCourseImageUrl(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleSignup}>
                {"ADD COURSES"}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coursesform;