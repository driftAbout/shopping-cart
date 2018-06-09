import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import CheckoutCardInfo from '../checkout-card-info/checkout-card-info';

class CheckoutForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      address_line1: '',
      address_line2: '',
      address_city: '',
      address_state: '',
      name_err_mesg: '',
      address_line1_err_mesg: '',
      address_city_err_mesg: '',
      address_state_err_mesg: '',

    };
    this.inputNameArray = ['name', 'address_line1', 'address_city','address_state'];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.compileCardData = this.compileCardData.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value, [`${e.target.name}_err_mesg`]: ''});
  }

  hasRequiredFieldError(requiredFieldErrorMessages){
    let hasError = false;
    if(Object.keys(requiredFieldErrorMessages).length) hasError = true;
    return hasError;
  }

  setRequiredFieldErrorMessages(){
    let errorMessages = {};
    this.inputNameArray.forEach(inputName => {
      if(!this.state[inputName])
        errorMessages[`${inputName}_err_mesg`] = `${inputName} is required`;
    });
    if(Object.keys(errorMessages).length) this.setState(errorMessages);
    return errorMessages;
  }

  renderErrorMessage(inputName){
    return this.state[`${inputName}_err_mesg`] ?
      <span className="required-error">{this.state[`${inputName}_err_mesg`]}</span>
      : undefined;
  }

  compileCardData(){
    return ({
      name: this.state.name,
      address_line1: this.state.address_line1,
      address_line2: this.state.address_line2,
      address_city: this.state.address_city,
      address_state: this.state.address_state,
    });
  }


  handleSubmit(e){
    e.preventDefault();
    if (this.hasRequiredFieldError(this.setRequiredFieldErrorMessages())) return;
    this.props.stripe.createToken(this.compileCardData()).then(({token}) => {
      console.log('Received Stripe token:', token);
    });
  }

  render(){
    return (
      <form className="checkout-form" onSubmit={this.handleSubmit}>
        <fieldset className="name-address" >
          <input name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"/>

          {this.renderErrorMessage('name')}

          <input name="address_line1"
            type="text"
            value={this.state.address_line1}
            onChange={this.handleChange}
            placeholder="Address Line 1"/>

          {this.renderErrorMessage('address_line1')}

          <input name="address_line2"
            type="text"
            value={this.state.address_line2}
            onChange={this.handleChange}
            placeholder="Address Line 2"/>
        </fieldset>

        <fieldset className="city-state" >
          <span className="input-wrap">
            <input name="address_city"
              type="text"
              value={this.state.address_city}
              onChange={this.handleChange}
              placeholder="City"/>

            {this.renderErrorMessage('address_city')}
          </span>

          <span className="input-wrap">
            <input name="address_state"
              type="text"
              value={this.state.address_state}
              onChange={this.handleChange}
              placeholder="State"/>

            {this.renderErrorMessage('address_state')}

          </span>

        </fieldset>
        <CheckoutCardInfo />
        <fieldset className="submit-button-wrap">
          <button type="submit">Purchase</button>
        </fieldset>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);