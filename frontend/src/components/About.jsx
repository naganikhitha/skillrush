import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              
            </div>
            <p className="mid">
            Online courses can be important because they offer flexibility, allow students to learn at their own pace, and can help with career advancement. Here are some other benefits of online courses:
Flexibility: Students can schedule classes at their convenience, even while working full-time jobs
Personalized learning: Teachers can adapt the curriculum to each student's ability
Technical skills: Students can learn new tools for communication, scheduling, and learning
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.jpg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};
export default About;