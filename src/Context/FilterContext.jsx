import { createContext, useContext, useEffect, useReducer } from 'react';
import { useProductContext } from './ProductContext';
import reducer from '../Reducer/FilterReducer';

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // To set the grid view
    const setGridView = () => {
      return  dispatch({ type: "SET_GRID_VIEW" });
    };

  useEffect(() => {
    dispatch({ type: "Load_Filter_Products", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state , setGridView}}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { useFilterContext, FilterContextProvider, FilterContext };
