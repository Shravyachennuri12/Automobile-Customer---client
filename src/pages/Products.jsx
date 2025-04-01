import React from 'react';
import '../styles/Products.css'; 

const Products = () => {
  return (
    <div className="products-container">
      <h1 className="title">Our Vehicles</h1>
      <div className="product-grid">
        {/* Placeholder for product grid */}
        <div className="product-card">
          <img
            src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80"
            alt="Car"
            className="product-image"
          />
          <div className="product-details">
            <h3 className="product-title">Luxury Sedan</h3>
            <p className="product-description">Premium comfort and performance</p>
            <div className="price-button-container">
              <span className="product-price">$75,000</span>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
