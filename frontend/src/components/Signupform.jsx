import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signupform = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const [role, setRole]=useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/admin/send",
        { firstName, lastName, email, username,password, role },
        {
          headers: {
            "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          }
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setRole("");
      localStorage.setItem('role',role);
      localStorage.setItem('username', username);
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
            <h1>SIGN UP</h1>
           
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
<div>
              <input
                  type="text"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              
              <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                  
                  </div>         
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                
              <select
                className="sign-up-as"
                  placeholder="Sign up as"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}>
                    <option value="" disabled selected>Sign up as...</option>
                    <option value="author">Author</option>
                    <option value="reader">Reader</option>
                  </select>
              </div>
              <button type="submit" onClick={handleSignup}>
                {"SIGN UP NOW"}
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

export default Signupform;