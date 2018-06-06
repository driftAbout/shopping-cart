import React from 'react';
import {injectStripe} from 'react-stripe-elements';
//import CheckoutAddress from '../checkout-address/checkout-address';
import CheckoutCardInfo from '../checkout-card-info/checkout-card-info';

class CheckoutForm extends React.Component{
  constructor(props){
    super(props);
  }

  handleSubmit(e){
    e.preventDefault();

  }

  render(){
    return (
      <form className="checkout-form" onSubmit={this.handleSubmit}>
        {/* <CheckoutAddress /> */}
        <CheckoutCardInfo />
        <button type="submit">Purchase</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);