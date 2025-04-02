import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1> 

      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
<ul>
  {cart.map((item, index) => (
    <li key={index}>
      <span className="car-name">{item.make} {item.model}</span> - 
      <span className="car-price"> ${item.price}</span>
      <button onClick={() => removeFromCart(index)}>Remove</button>
    </li>
  ))}
</ul>

          <h3>Total Price: ${totalPrice}</h3>
        </>
      )}
      <button onClick={() => navigate("/cars")}>Back to Cars</button>
    </div>
  );
};

export default CartPage;
