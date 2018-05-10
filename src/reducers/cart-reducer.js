export default (state=[], action) => {
  let {type, payload} = action;

  let takeAction = {};
  takeAction['CART_ADD'] = item => {
    return [...state, item];
  };

  return takeAction[type] ? takeAction[type](payload) : state;
};