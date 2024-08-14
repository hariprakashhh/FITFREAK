import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Workout from './Components/Workout';
import Diet from './Components/Diet';
import Progress from './Components/Progress';
import Mentalcare from './Components/mentalcare';
import Dashboard from './Components/Dashboard';
import FeedbackForm from './Components/FeedbackForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/workout" element={<Workout/>}/>
        <Route path="/mental-care" element={<Mentalcare/>}/>
        <Route path="/diet-plan" element={<Diet/>}/>
        <Route path="/my-progress" element={<Progress/>}/>
        <Route path="/admin-dashboard" element={<Dashboard/>}/>
        <Route path="/feedback" element={<FeedbackForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
