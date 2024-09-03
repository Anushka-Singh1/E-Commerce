import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    products: [],
    isError: false,
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
        setApiData: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.featureProducts = action.payload.filter((curElem) => curElem.featured === true);
        },
        setError: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
        setSingleLoading: (state) => {
            state.isSingleLoading = true;
        },
        setSingleProduct: (state, action) => {
            state.isSingleLoading = false;
            state.singleProduct = action.payload;
        },
        setSingleError: (state) => {
            state.isSingleLoading = false;
            state.isError = true;
        },
    },
});

export const { setLoading, setApiData, setError, setSingleLoading, setSingleProduct, setSingleError } = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const res = await axios.get('https://api.pujakaitem.com/api/products');
        dispatch(setApiData(res.data));
    } catch (error) {
        dispatch(setError());
    }
};

export const fetchSingleProduct = (url) => async (dispatch) => {
    dispatch(setSingleLoading());
    try {
        const res = await axios.get(url);
        dispatch(setSingleProduct(res.data));
    } catch (error) {
        dispatch(setSingleError());
    }
};

export default productSlice.reducer;
