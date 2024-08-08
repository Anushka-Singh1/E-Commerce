import { createContext, useReducer, useContext, useEffect } from 'react';
import reducer from '../Reducer/CartReducer';

const CartContext = createContext();

const getLocalCartData=()=>{
    let localCartData = localStorage.getItem('cart');
    if(localCartData.length>0){
        return JSON.parse(localCartData); //returning the data in the form of array
    }
    else{
        return [];
    }
        
}
const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 5000,
  };
  const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, activeColor, product) => {
    // console.log('Dispatching:', { id, amount, activeColor, product }); //debugging
    dispatch({ type: 'ADD_TO_CART', payload: { id, amount, activeColor, product } });
  };

  //to remove the item from the cart
   const  removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  //to add the data in the local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  //to clear the cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  }
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
