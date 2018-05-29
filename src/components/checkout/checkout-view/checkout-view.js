import React from 'react';
import {connect} from 'react-redux';


class CheckoutView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section className="checkout-container">
        <h1>Checkout</h1>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(CheckoutView);