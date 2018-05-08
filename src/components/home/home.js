import React from 'react';
import ProductList from '../product/product-list';
import products from '../../lib/test-products';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    return (
      <section>
        <h2>Buy Something!</h2>
        <article>
          <ProductList products={products}/>
        </article>
      </section>
    );
  }
}