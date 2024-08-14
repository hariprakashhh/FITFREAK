import axios from 'axios'; // Import axios to make HTTP requests
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Login.css';
import fit from "../Assets/fit.png";

export default function Login({ switchToSignup, onClose, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const validateForm = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = "Username is required.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:9000/login', {
          username,
          password,
        });
        console.log('User logged in:', response.data);
        alert('Login successful');
        
        if (username === 'admin' && password === 'admin@123') {
          navigate('/admin-dashboard'); // Redirect to the admin dashboard
        }
         else {
          onLogin(username); // Pass username to the parent component
        }
        
      } catch (error) {
        console.error('There was an error logging in!', error);
        alert('Login failed');
      }
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <div className="container">
          <div className="login">
            <form onSubmit={handleSubmit}>
              <p className="welcome">WELCOME BACK!</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              {errors.username && <span className="error">{errors.username}</span>}
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span className="error">{errors.password}</span>}
              <div className="form-options">
                <div>
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={(e) => setShowPassword(e.target.checked)}
                  />
                </div>
                <div>
                  <label>Show Password</label>
                </div>
              </div>
              <button type="submit">Login</button>
              <p className="forget">Forgot Password?</p>
              <p className="no-account" onClick={switchToSignup}>
                Don't have an account? Sign Up
              </p>
            </form>
            <div className="pic">
              <img src={fit} alt="Fit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
