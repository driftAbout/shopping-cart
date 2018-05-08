import React from 'react';
import {Provider} from 'react-redux';
import store from '../../lib/store';
import {Route, Redirect} from 'react-router-dom';
import Home from '../home';
import Cart from '../cart';
import AppHeader from '../app';
import AppFooter from '../app';


export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Provider store={store}>
        <AppHeader />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </main>
        <AppFooter />
      </Provider>
    );
  }
}