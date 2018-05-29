import React from 'react';
import CartRow from './cart-row';
import {Link} from 'react-router-dom';

export default class CartTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemsCount: this.props.cart.itemsTotal || 0,
      total: this.props.cart.total || 0,
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({itemsCount: nextProps.cart.itemsTotal, total:nextProps.cart.total});
  }

  render(){
    return (
      <div className="cart-table-wrap">
        <table className="cart-table">
          <thead>
            <tr className="cart-table-header-row">
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.products.map(prod =>
              <CartRow
                key={prod.id}
                product={prod}
                removeFromCart={this.props.removeFromCart}
                updateCartProduct={this.props.updateCart}
              />
            )}
          </tbody>
          <tfoot>
            <tr className="cart-table-footer-row">
              <td></td>
              <td><span className="cart-table-items-count-label">Items:</span><span className="cart-table-items-count">{this.state.itemsCount}</span></td>
              <td></td>
              <td>Total:<span className="cart-table-total">{this.state.total}</span></td>
            </tr>
          </tfoot>
        </table>
        <div className="cart-table-btn-wrap" >
          <button type="button"
            className="empty-cart-button"
            onClick={this.props.emptyCart}>empty cart</button>
          {/* <button type="button"
            className="checkout-cart-btn"
            onClick={this.props.emptyCart}>Checkout</button> */}
          <span
            className="checkout-cart-btn">
            <Link to='/checkout'>Checkout</Link></span>
        </div>
      </div>
    );
  }
}