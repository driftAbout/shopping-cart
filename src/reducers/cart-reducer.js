export default (state=[], action) => {
  let {type, payload} = action;

  let takeAction = {};
  takeAction['CART_ADD'] = item => {
    return [...state, item];
  };


  takeAction['CART_RESET'] = payload => payload;

  takeAction['CART_REMOVE_PRODUCT'] = product =>
    state.filter(prod => prod.id !== product.id);

  return takeAction[type] ? takeAction[type](payload) : state;
};