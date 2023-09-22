import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submit');
    setIsSubmitted(true);
  };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Back to Main Page
            </Button>
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          {cartItems.map((item) => (
            <Card key={item.id} className="cart-items">
              <CardContent>
                <div className="item-details">
                  <img src={item.image} alt={item.name} />
                  <p>
                    {item.name} - ${item.price} - Quantity: {item.quantity}
                  </p>
                </div>
                <div className="item-icons">
                  <AddCircleIcon onClick={() => increaseQuantity(item.id)} className="icon" />
                  <DoDisturbOnIcon onClick={() => decreaseQuantity(item.id)} className="icon" />
                  <DeleteIcon onClick={() => removeFromCart(item.id)} className="icon" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <div className="total-cost">
            <h3>Total Cost: ${calculateTotalCost()}</h3>
          </div>

      {cartItems.length > 0 && (
        <Card className="shipping-payment">
          <div className="shipping-info">
            <h3>Shipping Information</h3>
            <form className="shipping-form">
              <label>
                Name:
                <input type="text" placeholder="Enter your name" />
              </label>
              <label>
                Address:
                <input type="text" placeholder="Enter your address" />
              </label>
            </form>
          </div>

          <div className="payment-info">
            <h3>Payment Details</h3>
            <form className="payment-form">
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
            </form>
          </div>

        

          <button className="submit-button" onClick={handleFormSubmit}>
            Submit Order
          </button>
          {isSubmitted && <div className="order-placed">Your order is placed!</div>}
        </Card>
      )}

      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Back to Main Page
        </Button>
      </Link>
    </div>
  );
};

export default CartPage;








