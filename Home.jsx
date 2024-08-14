import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import balance from '../Assets/balance.webp';
import blog1 from '../Assets/blog1.jpeg';
import blog2 from '../Assets/blog2.webp';
import contact from '../Assets/contact.jpg';
import '../Assets/css/footer.css';
import '../Assets/css/Home.css';
import '../Assets/css/nav.css';
import email from '../Assets/email.png';
import facebook from '../Assets/facebook.png';
import backgroundImage from '../Assets/fitimg.jpg';
import gym from '../Assets/gym-icon.png';
import healthy from '../Assets/healthy.webp';
import insta from '../Assets/insta.png';
import location from '../Assets/location.png';
import logo from '../Assets/logo.png';
import profile from '../Assets/profile.webp';
import twitter from '../Assets/twitter.png';
import Bmi from '../Components/Bmi';
import Login from './Login';
import Modal from './Modal';
import NewsletterForm from './newsletter';
import Signup from './Signup';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home'); // State for active page
  const [comments, setComments] = useState([]); // State for comments

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

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const newComment = event.target.comment.value;
    if (newComment) {
      setComments([...comments, newComment]);
      event.target.reset();
    }
  };

  return (
    <div>
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
          <Link to="/feedback" className={activePage === 'Feedback' ? 'active' : ''} onClick={() => handlePageClick('Feedback')}>Feedback</Link>
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
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-content">
          <h1>Fit<span className="freak">Freak</span></h1>
          <p>Shape your healthy life</p>
          <p>Get your plan to get the latest scoop right to your inbox</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Get Started</button>
          </form>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2>Welcome To Fit Freak</h2>
          <p>Don’t limit your challenges. Challenge your limits</p>
          <div className="services">
            <div className="service">
              <img src={gym} alt="Icon 1" />
              <h3>Increase mobility</h3>
              <p>Increase your body's freedom of movement and flexibility.</p>
            </div>
            <div className="service">
              <img src={healthy} alt="Icon 2" />
              <h3>Healthy Daily Life</h3>
              <p>Prioritize healthy choices in diet, activity, and rest for overall wellness.</p>
            </div>
            <div className="service">
              <img src={balance} alt="Icon 3" />
              <h3>Balance Body & Mind</h3>
              <p>Balance nutritious eating, regular exercise, and restful sleep for optimal health</p>
            </div>
          </div>
        </div>
      </section>

      <Bmi />
      
      <NewsletterForm />
      
      {/* Comments Section */}
      <section className="comments-section">
        <h2>Leave a Comment</h2>
        <form onSubmit={handleCommentSubmit}>
          <textarea name="comment" placeholder="Write your comment here..." required></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="comments-list">
          {comments.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="comment">
                <p>{comment}</p>
              </div>
            ))
          )}
        </div>
      </section>
      
      <footer className="footer">
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className="social-icons">
            <img style={{ height: '45px' }} src={facebook} alt='facebook'></img>
            <img style={{ height: '42px' }} src={twitter} alt='twitter'></img>
            <img style={{ height: '45px', borderRadius: '22px' }} src={insta} alt='insta'></img>
          </div>
        </div>
        <div className="footer-section recent-blog">
          <h3>Recent Blog</h3>
          <div className="blog-post">
            <img src={blog1} alt="Blog post" />
            <p>Even the all-powerful Pointing has no control about<br />Jul 22, 2024</p>
          </div>
          <div className="blog-post">
            <img src={blog2} alt="Blog post" />
            <p>Even the all-powerful Pointing has no control about<br />Dec 25, 2023</p>
          </div>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li><img style={{width: '30px',marginRight:'20px'}} src={location} alt='location' /> Coimbatore</li>
            <li><img style={{width: '40px',marginRight:'12px'}} src={contact} alt='contact' /> +91 9585 6604 441</li>
            <li><img style={{width: '27px',marginRight:'22px',marginLeft:'5px'}} src={email} alt='email' /> fitfreak@gmail.com</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

