import React from 'react';

export default class CartRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(e){
    this.setState({[e.name]: [e.value]});
  }

  handleRemove(){
    this.props.removeFromCart(this.props.product);
  }

  render(){
    return (
      <tr className="cart-row">
        <td className="cart-product-image">
          <div className="product-image" >{this.props.product.value}</div>
        </td>
        <td className="cart-product-quantity">
          <input type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
            min="0"
            step="1"/>
          <button type="button"
            className="remove-from-cart-btn"
            onClick={this.handleRemove}>remove</button>
        </td>
      </tr>
    );
  }
}