export default (state=[], action) => {
  let {type, payload} = action;

  let takeAction = {};
  takeAction['ADD_TO_CART'] = item => {
    return [...state, item];
  };

  return takeAction[type] ? takeAction[type](payload) : state;
};