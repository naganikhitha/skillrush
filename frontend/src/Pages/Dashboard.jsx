import React from 'react'
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  var [dashboard, setDashboard] = useState([]);
  var [purchaseDate, setPurchaseDate]  = useState(1);

  

  const navigate = useNavigate();
  if(!dashboard.length) {
    const username = localStorage.getItem('username');
  axios.get('http://localhost:4000/api/v1/purchases/dashboard?username='+username).then((data) => {
        setDashboard(data.data.dashboard);
      }).catch((error) => {
        toast.error(error);});
      }
  return (
    <>
     <Navbar />
    <div className='bg-section'>
        <div className="dashboard">
          <div className='dashboard-header'>
          <h1>Dashboard</h1>
          <select value={purchaseDate}>
            <option value="1">Today</option>
            <option value="7">Last week</option>
            <option value="30">Last month</option>
            <option value="alltime">Lifetime</option>
          </select>
          </div>
          <div className='dashboard-overview'>
          <div className="dashboard-details">
            <h2>Total Purchases:</h2>
            <h3>{dashboard.length}</h3>
          </div>
          <div className='dashboard-details'>
            <h2>Total Purchases:</h2>
            
            <ul>
            
          {
          dashboard
            .map(course => 
              <li key={course._id} onClick={() => navigate('/courses/'+course.courseId)}>User {course.username} purchased {course.courseId}</li>
            )
        }
                      </ul>

          </div>
          </div>
        </div>
     </div>
     <Footer/>

   
    </>
  )
}

export default Dashboard;