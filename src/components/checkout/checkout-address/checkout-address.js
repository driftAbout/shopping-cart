import React from 'react';
import {PostalCodeElement} from 'react-stripe-elements';

export default class CheckoutAddress extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <PostalCodeElement />
    );
  }
}