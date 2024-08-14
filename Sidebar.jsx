import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartLine, FaDumbbell, FaUtensils, FaBrain, FaUserFriends } from 'react-icons/fa'; // Updated icons
import '../Assets/css/Sidebar.css';
import logo from '../Assets/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
      <img className="logo-icon" src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <div className="menu-item">
          <FaHome className="menu-icon" />
          <Link to="/" className='sidebar-ad'>Home</Link>
        </div>
        <div className="menu-item">
          <FaChartLine className="menu-icon" />
          <Link to="/admin-dashboard" className='sidebar-ad'>Dashboard</Link>
        </div>
        <div className="menu-item">
          <FaDumbbell className="menu-icon" />
          <Link to="/vmdashboard"className='sidebar-ad'>Workouts</Link>
        </div>
        <div className="menu-item">
          <FaUtensils className="menu-icon" />
          <Link to="/emdashboard"className='sidebar-ad'>Diet</Link>
        </div>
        <div className="menu-item">
          <FaBrain className="menu-icon" />
          <Link to="/feedback"className='sidebar-ad'>Mental Health Analytics</Link>
        </div>
        <div className="menu-item">
          <FaUserFriends className="menu-icon" />
          <Link to="/rewards"className='sidebar-ad'>Users</Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
