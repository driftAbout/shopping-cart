import getTestProducts from '../lib/test-products';

const setProducts = products => ({
  type: 'PRODUCTS_SET',
  payload: products,
});


const getProductsRequest = () => dispatch => {
  return Promise.resolve(getTestProducts())
    .then(products => {
      dispatch(setProducts(products));
    });
};

export {getProductsRequest};