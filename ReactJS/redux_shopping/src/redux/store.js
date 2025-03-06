import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/features/products/productSlice' ; 
import cartReducer from '../redux/features/products/productSlice'

const store = configureStore({
    reducer: {
        products: productReducer,
        carts: cartReducer
    }
})

export default store ; 