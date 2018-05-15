const addToCart = product => ({
  type: 'CART_ADD',
  payload: product,
});

const resetCart = () =>({
  type: 'CART_RESET',
  payload: [],
});

const removeFromCart = product => ({
  type: 'CART_REMOVE_PRODUCT',
  payload: product,
});

export {addToCart, resetCart, removeFromCart};
