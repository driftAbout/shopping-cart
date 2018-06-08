import '../_checkout.scss';
import React from 'react';
import {connect} from 'react-redux';
import {StripeProvider} from 'react-stripe-elements';
import {Elements} from 'react-stripe-elements';

import InjectedCheckoutForm from '../checkout-form/checkout-form';
import InjectedAddressForm from '../checkout-address/checkout-address';
import PaymentRequestForm from '../checkout-payment-request/checkout-payment-request';

class CheckoutView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <StripeProvider apiKey={__STRIPE_API_KEY__}>
        <section className="checkout-container">
          <h1>Checkout</h1>
          <Elements>
            <InjectedCheckoutForm />
            {/* <PaymentRequestForm amount={this.props.total} /> */}
          </Elements>
          {/* <Elements>
            <InjectedAddressForm />
          </Elements> */}
        </section>
      </StripeProvider>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(CheckoutView);