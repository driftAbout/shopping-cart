import React from 'react';
import ProductList from '../product/product-list';
//import products from '../../lib/test-products';
import {connect} from 'react-redux';
import {getProductsRequest} from '../../actions/product-actions';

class ProductsView extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(!this.props.products.length)
      this.props.getProducts();
  }

  render(){
    return (
      <section className="products-view-container">
        <h2>Start your own vowel movement!</h2>
        <ProductList products={this.props.products}/>
      </section>
    );
  }
}


const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);