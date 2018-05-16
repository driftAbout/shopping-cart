import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../actions/cart-actions';

class ProductItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product: this.props.product,
      isVisible: false,
    };
    this.handleClickImage = this.handleClickImage.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleClickImage(){
    this.setState({isVisible: !this.state.isVisible});
  }

  handleAddToCart(){
    this.setState({isVisible: !this.state.isVisible});
    if (this.props.cart.products && !this.props.cart.products.every(item => item.id !== this.state.product.id)) return;
    this.props.addToCart(this.state.product);
  }

  render(){
    return (
      <li className='product-item'>
        <div className="product-container">
          <div className="product-image"
            onClick={this.handleClickImage}>
            {this.props.product.value}
          </div>
          <div className={`product-info${this.state.isVisible ? ' visible' : ''}`}
            onClick={this.handleAddToCart}>
            <p>Add to Cart<span className="icon-cart"></span></p>
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);