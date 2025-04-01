import React from 'react';
import '../styles/Home.css'; 
const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury car"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-text">
            <h1 className="hero-title">Find Your Dream Car</h1>
            <p className="hero-description">Discover our extensive collection of premium automobiles</p>
            <button className="hero-button">
              Browse Cars
            </button>
          </div>
        </div>
      </section>

      <section className="grid-section">
        <div className="grid-item">
          <h3 className="grid-item-title">Latest Models</h3>
          <p className="grid-item-description">Explore the newest additions to our inventory</p>
        </div>
        <div className="grid-item">
          <h3 className="grid-item-title">Special Offers</h3>
          <p className="grid-item-description">Check out our current deals and promotions</p>
        </div>
        <div className="grid-item">
          <h3 className="grid-item-title">Test Drive</h3>
          <p className="grid-item-description">Schedule a test drive for your favorite car</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
