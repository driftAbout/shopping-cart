import React from 'react';
import CartRow from './cart-row';

export default class CartTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemsCount: 0,
      total: 0,
    };

    this.updateTotals = this.updateTotals.bind(this);
  }

  updateTotals(countUpdate, subtotalUpdate, product){
    this.setState({
      itemsCount: this.state.itemsCount + countUpdate,
      total: this.state.total + subtotalUpdate,
    });
    if (!product === undefined)
      this.props.updateCart(product);
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
            {this.props.cart.map(prod =>
              <CartRow
                key={prod.id}
                product={prod}
                removeFromCart={this.props.removeFromCart}
                updateTotals={this.updateTotals}
              />
            )}
          </tbody>
          <tfoot>
            <tr className="cart-table-footer-row">
              <td></td>
              <td>Items<span className="cart-table-items-count">{this.state.itemsCount}</span></td>
              <td></td>
              <td>Total<span className="cart-table-total">{this.state.total}</span></td>
            </tr>
          </tfoot>
        </table>
        <div className="cart-table-btn-wrap" >
          <button type="button"
            className="empty-cart-button"
            onClick={this.props.emptyCart}>empty cart</button>
        </div>
      </div>
    );
  }
}