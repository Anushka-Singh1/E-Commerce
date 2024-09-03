// import { createContext, useContext, useEffect, useReducer } from 'react';
// import { useProductContext } from './ProductContext';
// import reducer from '../Reducer/FilterReducer';

// const FilterContext = createContext();

// const initialState = {
//   filter_products: [],
//   all_products: [],
//   grid_view: true,
//   sorting_value:"lowest",
//   filters:{
//     text: "",
//     category: "All",
//     company: "All",
//     colors: "All",
//     maxPrice: 0,
//     price:0,
//     minPrice:0,
//   },
// };

// const FilterContextProvider = ({ children }) => {
//   const { products } = useProductContext();
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // To set the grid view
//     const setGridView = () => {
//       return  dispatch({ type: "SET_GRID_VIEW" });
//     };
//   // To set the list view
//     const setListView = () => {
//       return  dispatch({ type: "SET_LIST_VIEW" });
//     }; 

//   //sorting function
//   const sorting = (event) => {
//     let userValue = event.target.value;
//     dispatch({ type: "GET_SORT_VALUE", payload: userValue }); 
//   };

//   //To clear the filters
//   const clearFilters = () => {
//     dispatch({ type: "CLEAR_FILTERS" });
//   }

//   //sorting function useEffect
//   useEffect(() => {
//     dispatch({type: "FILTER_PRODUCTS"});
//     dispatch({ type: "SORTING_PRODUCTS" });
//   }, [products, state.sorting_value, state.filters]);
 

//   // TO load all the products for list and grid view
//   useEffect(() => {
//     dispatch({ type: "Load_Filter_Products", payload: products });
//   }, [products]);

//   //update the filter values
//   const updateFilterValue =(event)=>{
//     let name = event.target.name;
//     let value = event.target.value;
//     return dispatch({type: "UPDATE_FILTER_VALUE", payload: {name, value}});
//   }


  
//   return (
//     <FilterContext.Provider value={{ ...state , setGridView, setListView, sorting, updateFilterValue, clearFilters}}>
//       {children}
//     </FilterContext.Provider>
//   );
// };

// const useFilterContext = () => {
//   return useContext(FilterContext);
// };

// export { useFilterContext, FilterContextProvider, FilterContext };
