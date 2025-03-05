
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer 
    }
})

/*
        REDUX LIFESTYLE 

- Create store 

- Wrap app component under Provider 

- Create slice 

- Register reducer in store 

*/