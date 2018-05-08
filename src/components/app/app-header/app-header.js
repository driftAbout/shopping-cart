import './_app-header.scss';
import React from 'react';
import {AppNav} from '../';

export default class AppHeader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header>
        <AppNav />
        <h1>Everything [a-zA-Z]</h1>
      </header>
    );
  }
}