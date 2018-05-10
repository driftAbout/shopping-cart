import React from 'react';
import ProductList from '../product/product-list';
import products from '../../lib/test-products';
import {connect} from 'react-redux';
import {getProductsRequest} from '../../actions/product-actions';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(!this.props.products.length)
      this.props.getProducts();
  }

  render(){
    return (
      <section>
        <h2>Buy Something!</h2>
        <article>
          <ProductList products={this.props.products}/>
        </article>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);