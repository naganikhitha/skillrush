import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signinform = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  
 
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/admin/login",
        { username,password},
        {
          headers: {
            "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          }
        }
      );
      if(data.success) {
        toast.success(data.message);
        setUsername("");
        setPassword("");
        if(data.admin.role) {
          localStorage.setItem('role', data.admin.role);
          localStorage.setItem('username', username);
        } else {
          localStorage.setItem('role', 'author');
          localStorage.setItem('username', username);
        }
        navigate("/courses");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  const redirectToSignup = async (e) => {
    e.preventDefault();
    
    navigate("/sign-up");
  };

  return (
    <section className="reservation signin" id="reservation">
      <div className="container">
        
        <div className="banner">
          <div className="reservation_form_box">
            <h1>SIGN-IN FORM</h1>
            
            <form>
              <div>
                <input
                  type="text"
                  placeholder="USER NAME"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                SIGN IN NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
              <p> Not registered yet?  <span className="sign-up-text" onClick={redirectToSignup}>Sign up now!</span></p>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signinform;