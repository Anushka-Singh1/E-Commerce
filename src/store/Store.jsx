import { configureStore } from '@reduxjs/toolkit';
import productSlice from './Slices/ProductSlice';
import filterSlice from './Slices/FilterSlice';
import cartSlice from './Slices/CartSlice';


const store = configureStore({
    reducer: {
        products: productSlice,
        filters: filterSlice,
        cart: cartSlice,
    },
});

export default store;
