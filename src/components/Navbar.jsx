import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, ShoppingCart, Bell, User, Search } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <span className="logo-text">Automobile Customer - eCommerce</span>
        </Link>

        <div className="navbar-icons">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <Search className="search-icon" />
          </div>

          <button onClick={toggleDarkMode} className="theme-toggle-button">
            {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
          </button>

          <Link to="/cart" className="icon-button">
            <ShoppingCart className="icon" />
          </Link>

          <Link to="/notifications" className="icon-button">
            <Bell className="icon" />
          </Link>

          <Link to="/profile" className="icon-button">
            <User className="icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
