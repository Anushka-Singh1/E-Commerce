import { createContext, useReducer, useContext } from 'react';
import reducer from '../Reducer/CartReducer';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 5000,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, activeColor, product) => {
    // console.log('Dispatching:', { id, amount, activeColor, product }); //debugging
    dispatch({ type: 'ADD_TO_CART', payload: { id, amount, activeColor, product } });
  };
const  removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
