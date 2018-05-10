const addToCart = product => ({
  type: 'CART_ADD',
  payload: product,
});

export {addToCart};
