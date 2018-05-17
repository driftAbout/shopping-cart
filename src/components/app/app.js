import React from 'react';
import {Provider} from 'react-redux';
import store from '../../lib/store';
import {Route, Redirect} from 'react-router-dom';
import Home from '../home/home';
import CartView from '../cart/cart-view';
import ProductsView from '../product/products-view';
import ProductView from '../product/product-view/product-view';
import {AppHeader} from '../app';
import {AppFooter} from '../app';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Provider store={store}>
        <React.Fragment>
          <AppHeader />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductsView} />
            <Route exact path="/cart" component={CartView} />
            <Route path="/product/:product" component={ProductView} />
          </main>
          <AppFooter />
        </React.Fragment>
      </Provider>
    );
  }
}