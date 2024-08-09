
const CartReducer=(state, action) =>{
  if (action.type === 'ADD_TO_CART') {
    let { id, amount, activeColor, product } = action.payload;
    // console.log(product);

    //amount toggle in cart 

    let existingProduct = state.cart.find((item) => item.id === id + activeColor);
    if (existingProduct) {
      let updatedProduct = state.cart.map((item) => {
        if (item.id === id + activeColor) {
          let newAmount = item.amount + amount;
            if (newAmount > item.max) {
                newAmount = item.max;
            }
          return{
            ...item,
            amount: newAmount,
        };
        }
        else{
            return item;
        }
      });
        return {
            ...state,
            cart: updatedProduct,
        };
    }
    else{
        let cartProduct = {
            id: id + activeColor,
            name: product.name,
            activeColor,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
          };
          return {
            ...state,
            cart: [...state.cart, cartProduct],
          };
    }
    
}
if (action.type === 'REMOVE_ITEM') {
    let updatedCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }
    if (action.type === 'CLEAR_CART') {
        return {
        ...state,
        cart: [],
    };
}
if(action.type==='DECREASE'){
    let updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatedCart,
      };
}
if(action.type==='INCREASE'){
    let updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatedCart,
      };
}
if(action.type==='CART_TOTAL_ITEM')
{
    let updatedCartValue = state.cart.reduce((initialVal, item) => {
        let { amount } = item;
        initialVal += amount;
        return initialVal;
      }, 0);
        return {
            ...state,
            total_item: updatedCartValue,
        };
}
if(action.type==='CART_TOTAL_PRICE')
{
    let total_price=state.cart.reduce((initialVal, item) => {
        let { amount, price } = item;
        initialVal += amount * price;
        return initialVal;
      }, 0);
        return {
            ...state,
            total_amount: total_price,
        };

}
  return state;
};

export default CartReducer;

