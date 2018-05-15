import '../_select-box.scss';
import React from 'react';
import SelectBoxItem from '../select-box-item';

export default class SelectFilter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedValue: this.props.filter,
    };

    this.filters = ['All', 'Consonants', 'Vowels', 'Vowels ( Sometimes Y )'];
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.toggleVisible = this.toggleVisible.bind(this);
  }

  handleChange(e){
    this.setState({selectedValue: e.target.value});
  }

  handleSelect(val){
    this.setState({selectedValue: val, isVisible: false});
    this.props.onFilter(val);
  }

  handleBlur(){
    this.setState({isVisible: false});
  }

  toggleVisible(){
    this.setState({isVisible: !this.state.isVisible});
  }

  render(){
    return (
      <div className="custom-select-wrap filter">
        <input type="text" name="selectedValue"
          value={this.state.selectedValue}
          onChange={this.handleChange}
          onClick={this.toggleVisible}
          onBlur={this.handleBlur}/>
        <ul className={`custom-select-list filter${this.state.isVisible ? ' visible': ''}`}>
          {this.filters.map((filter, i) =>
            <SelectBoxItem
              key={i}
              value={filter}
              onSelect={this.handleSelect}
              selectClass="filter"/>
          )}
        </ul>
      </div>
    );
  }
}