
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
        
        //   if (newAmount > item.max) {
        //     newAmount = item.max;
        //   }
        //   return { ...item, amount: newAmount };
        // } else {
        //   return item;
        
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
  return state;
}

export default CartReducer;
