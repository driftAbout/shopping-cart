import './_app-nav.scss';
import React from 'react';
import {Link} from 'react-router-dom';

export default class AppNav extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/products">Products</Link></li>
          <li className="nav-item"><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    );
  }

}