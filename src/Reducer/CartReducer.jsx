
const CartReducer=(state, action) =>{
  if (action.type === 'ADD_TO_CART') {
    let { id, amount, activeColor, product } = action.payload;
    // console.log(product);
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
if (action.type === 'REMOVE_ITEM') {
    let updatedCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }
  return state;
}

export default CartReducer;
