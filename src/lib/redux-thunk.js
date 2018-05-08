export default store => next => action => {
  return (typeof store === 'function')
    ? action(store.dispatch, store.getState)
    : next(action);
};