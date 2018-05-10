export default (state=[], action) => {
  let {type, payload} = action;

  let takeAction = {};

  takeAction['PRODUCTS_SET'] = products => [...state, ...products];

  return takeAction[type] ? takeAction[type](payload) : state;
};