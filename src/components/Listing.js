// src/components/ProductListing.js

import React from 'react';
import { Grid, Card, CardContent, CardActions, Typography, Button, CardMedia } from '@mui/material';
// import { Link } from 'react-router-dom';
const Listing = ({ products, addToCart }) => {
  return (
    <Grid container spacing={2}>

      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt={product.name}
              height="300"
              image={product.image}
            />
            <CardContent>
              <Typography variant="h7" component="div">
                {product.name}
              </Typography>
              <Typography color="textSecondary">${product.price}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color='primary'
                onClick={() => addToCart(product)} // Add to cart function
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
     
    </Grid>
  );
};

export default Listing;


