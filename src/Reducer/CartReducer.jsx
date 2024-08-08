
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
  return state;
}

export default CartReducer;
