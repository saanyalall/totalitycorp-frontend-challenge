import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{display:'flex'}}>
    <h1>E-Commerce Website</h1>
    <Link to="/cart" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
      <Badge badgeContent={cartItemCount} color="secondary" style={{margin:"10px"}}>
        <ShoppingCartIcon style={{ fontSize: '2rem' }} />
      </Badge>
    </Link>
    </div>
  );
};

export default Cart;








