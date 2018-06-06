import React from 'react';
import {CardElement} from 'react-stripe-elements';

export default class CheckoutCardInfo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <CardElement style={{base: {fontSize: '20px'}}}/>
    );
  }
}