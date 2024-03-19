
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import './App.css'
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import CreateCourse  from "./Pages/CreateCourse";
import CoursesList  from "./Pages/CoursesList";
import CourseDetails  from "./Pages/CourseDetails";
import Dashboard  from "./Pages/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<Signin/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
          
         
          <Route path='/create-course' element={<CreateCourse/>}/>
          <Route path='/courses' element={<CoursesList/>}/>

          <Route path="/courses/:courseId" element={<CourseDetails/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/my-courses" element={<Dashboard/>} />

          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App