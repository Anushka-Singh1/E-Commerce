import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: 'lowest',
    filters: {
        text: '',
        category: 'All',
        company: 'All',
        colors: 'All',
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setGridView: (state) => {
            state.grid_view = true;
        },
        setListView: (state) => {
            state.grid_view = false;
        },
        getSortValue: (state, action) => {
            state.sorting_value = action.payload;
        },
        updateFilterValue: (state, action) => {
            const { name, value } = action.payload;
            state.filters[name] = value;
        },
        clearFilters: (state) => {
            state.filters = {
                ...state.filters,
                text: '',
                category: 'All',
                company: 'All',
                colors: 'All',
                price: state.filters.maxPrice,
            };
        },
        filterProducts: (state) => {
            let tempFilterProduct = [...state.all_products];
            const { text, category, company, colors, price } = state.filters;
            if (text) tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.name.toLowerCase().includes(text.toLowerCase()));
            if (category !== 'All') tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.category === category);
            if (company !== 'All') tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.company.toLowerCase() === company.toLowerCase());
            if (colors !== 'All') tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.colors.includes(colors));
            if (price) tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price <= price);
            state.filter_products = tempFilterProduct;
        },
        sortingProducts: (state) => {
            const { filter_products, sorting_value } = state;
            const sortingProducts = (a, b) => {
                if (sorting_value === 'price-lowest') return a.price - b.price;
                if (sorting_value === 'price-highest') return b.price - a.price;
                if (sorting_value === 'name-a') return a.name.localeCompare(b.name);
                if (sorting_value === 'name-z') return b.name.localeCompare(a.name);
            };
            state.filter_products = [...filter_products].sort(sortingProducts);
        },
        loadFilterProducts: (state, action) => {
            const priceArr = action.payload.map((curElem) => curElem.price);
            const maxPrice = Math.max(...priceArr);
            state.all_products = [...action.payload];
            state.filter_products = [...action.payload];
            state.filters = { ...state.filters, maxPrice, price: maxPrice, minPrice: Math.min(...priceArr) };
        },
    },
});

export const {
    setGridView,
    setListView,
    getSortValue,
    updateFilterValue,
    clearFilters,
    filterProducts,
    sortingProducts,
    loadFilterProducts,
} = filterSlice.actions;

export default filterSlice.reducer;
