import '../_checkout.scss';
import React from 'react';
import {connect} from 'react-redux';
import {StripeProvider} from 'react-stripe-elements';
import {Elements} from 'react-stripe-elements';

import InjectedCheckoutForm from '../checkout-form/checkout-form';

class CheckoutView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <StripeProvider apiKey={__STRIPE_API_KEY__}>
        <section className="checkout-container">
          <h1>Check it Out!</h1>
          <Elements>
            <InjectedCheckoutForm />
          </Elements>
        </section>
      </StripeProvider>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(CheckoutView);