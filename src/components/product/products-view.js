import React from 'react';
import ProductList from '../product/product-list';
import SelectFilter from '../select-box/filter/filter';
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
        <SelectFilter />
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