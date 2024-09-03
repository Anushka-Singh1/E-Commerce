import { createSlice } from '@reduxjs/toolkit';

const getLocalCartData = () => {
    let localCartData = localStorage.getItem('cart');
    return localCartData ? JSON.parse(localCartData) : [];
};

const initialState = {
    cart: getLocalCartData(),
    total_item: 0,
    total_amount: 0,
    shipping_fee: 5000,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, amount, activeColor, product } = action.payload;
            const existingProduct = state.cart.find((item) => item.id === id);
            if (existingProduct) {
                existingProduct.amount += amount;
            } else {
                state.cart.push({ ...product, amount, activeColor });
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        },
        setDecrease: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) item.amount -= 1;
        },
        setIncrease: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) item.amount += 1;
        },
        cartTotalItem: (state) => {
            state.total_item = state.cart.reduce((total, item) => total + item.amount, 0);
        },
        cartTotalPrice: (state) => {
            state.total_amount = state.cart.reduce((total, item) => total + item.price * item.amount, 0) + state.shipping_fee;
        },
    },
});

export const {
    addToCart,
    removeItem,
    clearCart,
    setDecrease,
    setIncrease,
    cartTotalItem,
    cartTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
