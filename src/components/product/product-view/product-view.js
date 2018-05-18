import './_product-view.scss';
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions/cart-actions';

class ProductView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product: this.props.location.state.product,
      quantity: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentWillMount(){
    console.log('Params', this.state);
  }

  handleChange(e){
    this.setState({quantity: parseInt(e.target.value)});
  }

  handleAddToCart(){
    if (this.props.cart.products && !this.props.cart.products.every(item => item.id !== this.state.product.id)) return;
    let product = {...this.state.product};
    product.quantity = this.state.quantity;
    product.subtotal = this.mathRoundCents(this.state.quantity * product.price);
    this.props.addToCart(product);
  }

  mathRoundCents(value){
    return  Math.round((value) * 100) / 100;
  }

  render(){
    return (
      <section className="product-view-container">
        <div className="product-view-image-wrap">
          <div className="product-image-large">
            {this.state.product.value}
          </div>
          <div className="product-info-wrap">
            <div className="product-description">
              {this.state.product.description}
            </div>
            <div className="product-type">
              <span>Letter Type:</span>
              <span>{this.state.product.type}</span>
            </div>
            <div className="product-price">
              {this.state.product.price}
            </div>
            <div>
              <input type="number" name="quantity"
                min="1" value={this.state.quantity}
                onChange={this.handleChange}/>
              <label htmlFor="quantity">Qty</label>
            </div>
            <div className="button-wrap">
              <button type="button" name="add-to-cart-btn"
                onClick={this.handleAddToCart}>add to cart</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);