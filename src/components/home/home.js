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
        <div className="landing-container">
          <h2>That&apos;s a whole lot of</h2>
          <span className="letter-logo-image">S</span>
          <span className="letter-logo-image">T</span>
          <span className="letter-logo-image">U</span>
          <span className="letter-logo-image">F</span>
          <span className="letter-logo-image">F</span>
          <h3>Buy Something!</h3>
        </div>
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