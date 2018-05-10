import React from 'react';
import {connect} from 'react-redux';
import {getProductsRequest} from '../../actions/product-actions';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section>
        <h2>Buy Something!</h2>
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