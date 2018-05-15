export default (state='All', action) => {
  let {type, payload} = action;

  const takeAction = {};
  takeAction['FILTER_SET'] = filter => filter;

  return takeAction[type] ? takeAction[type](payload) : state;
};