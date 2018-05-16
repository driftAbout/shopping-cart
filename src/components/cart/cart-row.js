import React from 'react';

export default class CartRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: this.props.product.quantity || 1,
      subtotal: this.props.product.subtotal || this.props.product.price,
    };

    this.price = this.props.product.price;

    this.quantityRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(e){
    this.quantityRef.current.blur();
    let quantity = parseInt(e.target.value);
    let subtotal = this.mathRoundCents(quantity * this.price);
    this.updateCartProduct(quantity, subtotal);
    this.setState({quantity: quantity, subtotal: subtotal});
  }

  updateCartProduct(quantity, subtotal){
    let product = this.props.product;
    product.quantity = quantity;
    product.subtotal = subtotal;
    this.props.updateCartProduct(product);
  }

  handleRemove(){
    this.props.removeFromCart(this.props.product);
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
            {this.price}
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