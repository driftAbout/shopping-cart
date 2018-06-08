import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import CheckoutCardInfo from '../checkout-card-info/checkout-card-info';

class CheckoutForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('props', this.props);
    this.props.stripe.createToken({name: 'Kevin Miller'}).then(({token}) => {
      console.log('Received Stripe token:', token);
    });
  }

  render(){
    return (
      <form className="checkout-form" onSubmit={this.handleSubmit}>
        <CheckoutCardInfo />
        <button type="submit">Purchase</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);