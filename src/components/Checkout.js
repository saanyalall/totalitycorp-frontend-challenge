// Checkout.js

import React, { useState } from 'react';

const Checkout = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  // Function to calculate the total cost of items in the cart
  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length > 0 ? (
        <div>
          <h3>Cart Summary</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} - Quantity: {item.quantity}
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Cost: ${calculateTotalCost()}</p>

          {/* Form for shipping information and payment details */}
          <h3>Shipping Information</h3>
          <form>
            <label>
              Name:
              <input type="text" placeholder="Enter your name" />
            </label>
            <label>
              Address:
              <input type="text" placeholder="Enter your address" />
            </label>
            {/* Add more fields for shipping information as needed */}
          </form>

          <h3>Payment Details</h3>
          <form>
            <label>
              Card Number:
              <input type="text" placeholder="Enter your card number" />
            </label>
            <label>
              Expiry Date:
              <input type="text" placeholder="MM/YY" />
            </label>
            <label>
              CVV:
              <input type="text" placeholder="Enter CVV" />
            </label>
            {/* Add more fields for payment details as needed */}
          </form>

          <button>Submit Order</button>
        </div>
      ) : (
        <p>Your cart is empty. Add items to your cart before proceeding to checkout.</p>
      )}
    </div>
  );
};

export default Checkout;

