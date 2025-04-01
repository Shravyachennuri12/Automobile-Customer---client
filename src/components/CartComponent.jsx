import React from 'react';
import useCartStore from './useCartStore';

function CartComponent() {
  const { items, addItem, removeItem, updateQuantity, clearCart } =
    useCartStore();

  const handleAddItem = () => {
    const newItem = {
      id: '1',
      name: 'Product 1',
      price: 10,
      quantity: 1,
      image: 'product1.jpg',
    };
    addItem(newItem);
  };

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  const handleUpdateQuantity = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
}

export default CartComponent;