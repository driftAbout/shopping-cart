import './_cart.scss';
import React from 'react';
import CartTable from './cart-table';
import {connect} from 'react-redux';
import {resetCart, removeFromCart} from '../../actions/cart-actions';

class CartView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cart: this.props.cart,
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({cart: nextProps.cart});
  }

  render(){
    return (
      <section className="cart-view-container">
        <h2>Shopping Cart</h2>
        <article>
          {this.props.cart.length ?
            <CartTable cart={this.state.cart}
              removeFromCart={this.props.removeFromCart}
              emptyCart={this.props.emptyCart}/>
            : <div className="empty-cart-message">There are no items in your cart</div>}
        </article>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  emptyCart: () => dispatch(resetCart()),
  removeFromCart: (product) => dispatch(removeFromCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartView);