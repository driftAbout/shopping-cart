import React from 'react';
import ProductItem from './product-item';

export default class ProductList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className="product-list">
        <ProductItem />
      </ul>
    );
  }
}