import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'carts',
  initialState: [], 
  reducers: {

    // add to cart 

    addToCart: (state, action) => {
      const existingProduct = state.find((product) => product.productId === action.payload.id) ;

      if(existingProduct){
        alert('Product already exists in cart!')
      }
      else{
        state.push({
          id: Date.now(),
          ...action.payload, 
          quantity: 1
        })
      }
    } 

    // increase quantity

    // decrease quantity 

    // remove from cart 
  }
})

export const {addToCart} = cartSlice.actions 
export default cartSlice.reducer