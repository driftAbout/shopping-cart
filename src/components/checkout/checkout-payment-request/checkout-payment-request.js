import React from 'react';
import {injectStripe, PaymentRequestButtonElement} from 'react-stripe-elements';

class PaymentRequestForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      canMakePayment: false,
      paymentRequest,
    };

    const paymentRequest = props.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Total',
        amount: this.props.amount || 0,
      },
    });

    paymentRequest.canMakePayment().then((result) => {
      console.log('result', result);
      this.setState({canMakePayment: !!result});
    });

  }

  render(){
    return this.state.canMakePayment ? (
      <PaymentRequestButtonElement
        paymentRequest={this.state.paymentRequest}
        className="PaymentRequestButton"
        style={{
          paymentRequestButton: {
            theme: 'light',
            height: '64px',
          },
        }}
      />
    ) : null;
  }

}

export default injectStripe(PaymentRequestForm);