// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Sun, Moon, ShoppingCart, Bell, User, Search } from 'lucide-react';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import Cart from './pages/Cart';
// import Profile from './pages/Profile';
// import Notifications from './pages/Notifications';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle('dark');
//   };

//   return (
//     <Router>
//       <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
//         <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
//           <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//           <main className="container mx-auto px-4 py-8">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/notifications" element={<Notifications />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
