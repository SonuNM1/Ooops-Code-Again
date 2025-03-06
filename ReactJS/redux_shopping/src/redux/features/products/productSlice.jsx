import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Product 1",
    price: 50,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-10-01",
  },
  {
    id: 2,
    name: "Product 2",
    price: 150,
    category: "Gadgets",
    image:
      "https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-10-01",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: state.length > 0 ? state[state.length - 1].id + 1 : 1, // ✅ Increment ID correctly
        ...action.payload,
      };
      return [...state, newProduct]; // ✅ Ensure immutability
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
