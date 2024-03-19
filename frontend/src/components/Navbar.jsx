import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate('/');
  }
  return (
    <>
      <nav>
        <div className="logo" onClick={() => navigate('/')}>SKILLRUSH</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {
              localStorage.getItem("role") === 'author' ? 
              <a onClick={() => navigate('/dashboard')}>DASHBOARD</a> : 
              <a onClick={() => navigate('/my-courses')}>MY COURSES</a>
            }
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
            <a onClick={() => navigate('/courses')}>COURSES</a>
          </div>
          { localStorage.getItem('username')}
          { !localStorage.getItem('username') ? 
          <button onClick={() => navigate('/sign-in')} className="menuBtn">SIGN IN</button> : <button onClick={logOut} className="menuBtn">LOG OUT</button>}
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;