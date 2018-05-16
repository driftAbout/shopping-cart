import React from 'react';

export default class CartRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: this.props.product.quantity || 1,
      price: 1.79,
      subtotal: 0,
    };

    this.quantityRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdateTotals = this.handleUpdateTotals.bind(this);
  }

  componentWillMount(){
    // this.setState({subtotal: this.handleUpdateTotals(this.state.quantity)});
    // this.updateCartTotals(this.state.quantity, this.state.quantity, this.handleUpdateTotals(this.state.quantity));
    let subtotal = this.mathRoundCents(this.state.quantity * this.state.price);
    this.setState({subtotal: subtotal});
    this.updateCartTotals(this.state.quantity, this.state.quantity, subtotal);

  }

  handleChange(e){
    this.quantityRef.current.blur();
    let quantityChange = e.target.value - this.state[e.target.name];
    let subtotalChange = this.mathRoundCents(quantityChange * this.state.price);
    let subtotal = this.mathRoundCents(e.target.value * this.state.price);
    //this.setState({[e.target.name]: [e.target.value], subtotal: this.handleUpdateTotals(e.target.value)});
    this.setState({[e.target.name]: [e.target.value], subtotal: subtotal});
    this.updateCartTotals( e.target.value, quantityChange, subtotalChange);
  }

  updateCartTotals(quantity, quantityChange, subtotalChange){
    let product = this.props.product;
    product.quantity = quantity;
    this.props.updateTotals(quantityChange, subtotalChange, product);
  }

  handleRemove(){
    this.props.removeFromCart(this.props.product);
  }

  handleUpdateTotals(quantity){
    return  Math.round((quantity * this.state.price) * 100) / 100;
    //this.props.updateTotal();
  }

  mathRoundCents(value){
    return  Math.round((value) * 100) / 100;
  }


  render(){
    return (
      <tr className="cart-row">
        <td className="cart-product-image">
          <div className="product-image" >{this.props.product.value}</div>
        </td>
        <td className="cart-product-quantity">
          {/* <button type="button"
            className="update-item-quantity"
            onClick={this.handleUpdateQuantity}>update</button> */}
          <button type="button"
            className="remove-from-cart-btn"
            onClick={this.handleRemove}>remove</button>
          <input type="number"
            name="quantity"
            ref={this.quantityRef}
            value={this.state.quantity}
            onChange={this.handleChange}
            min="0"
            step="1"/>
        </td>
        <td> 
          <div className="item-price">
            {this.state.price}
          </div>
        </td>
        <td> 
          <div className="item-subtotal">
            {this.state.subtotal}
          </div>
        </td>
      </tr>
    );
  }
}