import React from 'react';

export default class SelectBoxItem  extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onSelect(this.props.value);
  }

  render(){
    return (
      <li className={`custom-select-item ${this.props.selectClass}`}
        onMouseDown={this.handleClick}>
        {this.props.value}
      </li>
    );
  }

}