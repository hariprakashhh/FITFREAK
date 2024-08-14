import React, { useState, useRef, useEffect } from 'react';
import logo from '../Assets/logo.png';
import profile from '../Assets/profile.webp';
import { Link } from 'react-router-dom';
import '../Assets/css/nav.css';
import '../Assets/css/mentalcare.css';
import Modal from './Modal';
import Login from './Login';
import Signup from './Signup';
import Appointment from './Appointment';
import Mood from './Mood';


export default function Mentalcare() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState('Mental Care');

  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const switchToLogin = () => setIsLogin(true);
  const switchToSignup = () => setIsLogin(false);

  const handleLogin = (username) => {
    setUsername(username);
    closeModal();
  };

  const handleSignOut = () => {
    setUsername('');
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      profileRef.current &&
      !profileRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="mentalcare-container">
      <div className="nav-bar">
        <div className="logo">
          <img className="logo-icon" src={logo} alt="Logo" />
        </div>
        <div className="page-names">
          <Link to="/" className={activePage === 'Home' ? 'active' : ''} onClick={() => handlePageClick('Home')}>Home</Link>
          <Link to="/workout" className={activePage === 'Workouts' ? 'active' : ''} onClick={() => handlePageClick('Workouts')}>Workouts</Link>
          <Link to="/mental-care" className={activePage === 'Mental Care' ? 'active' : ''} onClick={() => handlePageClick('Mental Care')}>Mental Care</Link>
          <Link to="/diet-plan" className={activePage === 'Diet Plan' ? 'active' : ''} onClick={() => handlePageClick('Diet Plan')}>Diet Plan</Link>
          <Link to="/my-progress" className={activePage === 'My Progress' ? 'active' : ''} onClick={() => handlePageClick('My Progress')}>My Progress</Link>
        </div>
        <div className="log">
          {username ? (
            <div className="after-login" onClick={() => setDropdownOpen(!dropdownOpen)} ref={profileRef}>
              <img className="after-profile" src={profile} alt="Profile" />
              <p className="after-name">{username}</p>
              {dropdownOpen && (
                <div className="dropdown-menu" ref={dropdownRef}>
                  <button onClick={handleSignOut}>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => { openModal(); switchToLogin(); }}>Log in</button>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {isLogin ? (
          <Login switchToSignup={switchToSignup} onClose={closeModal} onLogin={handleLogin} />
        ) : (
          <Signup switchToLogin={switchToLogin} onClose={closeModal} />
        )}
      </Modal>
      <div className="mentalcare-page">
        <h1 style={{textAlign:'center'}}>How are you feeling today?</h1>
        <Mood/>
        <Appointment/>
      </div>
    </div>
  );
}
