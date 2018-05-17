import './_product-view.scss';
import React from 'react';
//import { addToCart } from '../../../actions/cart-actions';

export default class ProductView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product: this.props.location.state.product,
    };
  }

  componentWillMount(){
    console.log('Params', this.state);
  }

  render(){
    return (
      <section className="product-view-container">
        <div className="product-view-image-wrap">
          <div className="product-image-large">
            {this.state.product.value}
          </div>
          <div className="product-info-wrap">
            <span>
              {this.state.product.price}
            </span>
            <button type="button" name="add-to-cart-btn">add to cart</button>
          </div>
        </div>
      </section>
    );
  }
}