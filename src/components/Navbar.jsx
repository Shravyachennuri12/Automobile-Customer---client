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

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Sun, Moon, ShoppingCart, Bell, User, Search } from 'lucide-react';
// import '../styles/Navbar.css';

// const Navbar = ({ darkMode, toggleDarkMode }) => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo and Home Link */}
//         <Link to="/" className="logo">
//           <span className="logo-text">Car Dealership</span>
//         </Link>

//         {/* Navigation Links */}
//         <div className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/cars">Browse Cars</Link>
//         </div>

//         {/* Icons Section */}
//         <div className="navbar-icons">
//           {/* Search Bar */}
//           <div className="search-bar">
//             <input type="text" placeholder="Search..." className="search-input" />
//             <Search className="search-icon" />
//           </div>

//           {/* Dark Mode Toggle */}
//           <button onClick={toggleDarkMode} className="theme-toggle-button">
//             {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
//           </button>

//           {/* Shopping Cart */}
//           <Link to="/cart" className="icon-button">
//             <ShoppingCart className="icon" />
//           </Link>

//           {/* Notifications */}
//           <Link to="/notifications" className="icon-button">
//             <Bell className="icon" />
//           </Link>

//           {/* Profile */}
//           <Link to="/profile" className="icon-button">
//             <User className="icon" />
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
