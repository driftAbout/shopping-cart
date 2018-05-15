const saveToLocalStorage = state => {
  localStorage.cart = JSON.stringify(state.cart);
};

export default saveToLocalStorage;