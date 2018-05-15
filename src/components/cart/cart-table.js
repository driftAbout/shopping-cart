import React from 'react';
import CartRow from './cart-row';

export default class CartTable extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="cart-table-wrap">
        <table className="cart-table">
          <thead>
            <tr className="cart-table-header-row">
              <th>Item</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(prod =>
              <CartRow
                key={prod.id}
                product={prod}
                removeFromCart={this.props.removeFromCart}
              />
            )}
          </tbody>
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