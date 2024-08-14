import React, { useState, useRef, useEffect } from 'react';
import logo from '../Assets/logo.png';
import profile from '../Assets/profile.webp';
import { Link } from 'react-router-dom';
import '../Assets/css/nav.css';
import '../Assets/css/diet.css';
import Modal from './Modal';
import Login from './Login';
import Signup from './Signup';
import highProtein from '../Assets/High-protein-foods.jpg';
import lowCarb from '../Assets/no-carb-diet.webp';
import dairyFree from '../Assets/Dairy-Free.jpg';
import vegetaria from '../Assets/vegetaria.jpeg';
import highProteinRecipes from './HighProtein'; 
import lowCarbRecipes from './LowCarb';
import dairyFreeRecipes from './DairyFree';
import vegetariaRecipes from './Vegetaria';

export default function Diet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState('Diet Plan');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);

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

  const categories = [
    { name: 'High Protein', img: highProtein, recipes: 10 },
    { name: 'Low Carb', img: lowCarb, recipes: 10 },
    { name: 'Dairy Free', img: dairyFree, recipes: 11 },
    { name: 'Vegetarian', img: vegetaria, recipes: 11 },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category.name === 'High Protein') {
      setRecipes(highProteinRecipes); 
    }
    if (category.name === 'Low Carb') {
      setRecipes(lowCarbRecipes); 
    }
    if (category.name === 'Dairy Free') {
      setRecipes(dairyFreeRecipes); 
    }
    if (category.name === 'Vegetarian') {
      setRecipes(vegetariaRecipes); 
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
      <div className="diet-page">
        <h1>Browse your Diet</h1>
        <div className="category-grid">
          {categories.map((category) => (
            <div
              key={category.name}
              className="category-card"
              onClick={() => handleCategoryClick(category)}
            >
              <img src={category.img} alt={category.name} className="category-image" />
              <div className="category-content">
                <h3>{category.name}</h3>
                <p>{category.recipes} recipes</p>
              </div>
            </div>
          ))}
        </div>
        
        {selectedCategory && (
          <div className="recipes-grid">
            <h2>{selectedCategory.name} Recipes</h2>
            <div className="recipes-list">
              {recipes.map((recipe, index) => (
                <div key={index} className="recipe-card">
                  <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                  <div className="recipe-content">
                    <h3>{recipe.name}</h3>
                    <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p><br/>
                    <p><strong>Steps:</strong> {recipe.steps.join('. ')}</p><br/>
                    <p><strong>Nutrition:</strong> {recipe.nutrition}</p><br/>
                    <p><strong>Time:</strong> {recipe.time}</p><br/>
                    <p><strong>Rating:</strong> {recipe.rating} stars</p><br/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
