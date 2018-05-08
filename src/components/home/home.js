import React from 'react';
import ProductList from '../product/product-list';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section>
        <h2>Buy Something!</h2>
        <article>
          <ProductList />
        </article>
      </section>
    );
  }
}