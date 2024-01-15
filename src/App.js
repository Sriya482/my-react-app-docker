import React, { useState } from 'react';
import './App.css';

const ShoppingCart = () => {
  const [items,] = useState([
    { id: 1, name: 'Item 1', price: 10.99 },
    { id: 2, name: 'Item 2', price: 19.99 },
    { id: 3, name: 'Item 3', price: 5.99 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="shopping-container">
      <div className="items-container">
        <h2>Items for Sale</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((cartItem, index) => (
            <li key={index}>
              {cartItem.name} - ${cartItem.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
