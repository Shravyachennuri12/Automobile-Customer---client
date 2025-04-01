import React from 'react';
import { ShoppingCart } from 'lucide-react';
import '../styles/Cart.css'; // Import custom CSS

const Cart = () => {
  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-card">
        <div className="cart-body">
          <div className="text-center">
            <ShoppingCart className="cart-icon" />
            <p className="empty-cart-text">Your cart is empty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
