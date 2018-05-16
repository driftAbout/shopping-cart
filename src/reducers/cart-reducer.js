// export default (state=[], action) => {
//   let {type, payload} = action;

//   let takeAction = {};
//   takeAction['CART_ADD'] = item => {
//     return [...state, item];
//   };


//   takeAction['CART_RESET'] = payload => payload;

//   takeAction['CART_REMOVE_PRODUCT'] = product =>
//     state.filter(prod => prod.id !== product.id);


//   takeAction['CART_UPDATE_PRODUCT'] = product =>
//     state.map(prod => prod.id = product.id ? product : prod);

//   return takeAction[type] ? takeAction[type](payload) : state;
// };


const mathRoundCents = value => {
  return  Math.round((value) * 100) / 100;
};


export default (state={}, action) => {
  let {type, payload} = action;

  let takeAction = {};

  takeAction['CART_ADD'] = product => {
    let tempState = {...state};
    if (!tempState.products) tempState.products = [];
    tempState.products.push(product);
    tempState.itemsTotal = (tempState.itemsTotal || 0) + (product.quantity || 1);
    tempState.total = mathRoundCents((tempState.total || 0) + ((product.subtotal || product.price)));
    return tempState;
  };

  takeAction['CART_RESET'] = () => ({});

  takeAction['CART_REMOVE_PRODUCT'] = product => {
    let tempState = {...state};
    if (!tempState.products) return state;
    tempState.products = tempState.products.filter(prod => prod.id !== product.id);
    tempState.itemsTotal = (tempState.itemsTotal || 0) - (product.quantity || 1);
    tempState.total = mathRoundCents((tempState.total || 0) - ((product.subtotal || product.price)));
    return tempState;
  };

  takeAction['CART_UPDATE_PRODUCT'] = product => {
    let tempState = {...state};
    if (!tempState.products) return state;
    let {subtotal: total, quantity:itemsTotal} = product;
    if (total === undefined) total = 0;
    tempState.products = tempState.products.map(prod => {
      if(prod.id !== product.id) {
        total = mathRoundCents(total + (prod.subtotal || prod.price));
        itemsTotal+= prod.quantity || 1;
        return prod;
      }
      return product;
    });
    tempState.total = total;
    tempState.itemsTotal = itemsTotal;
    return tempState;
  };

  return takeAction[type] ? takeAction[type](payload) : state;
};