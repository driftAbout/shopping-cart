import React from 'react';
import ProductList from '../product/product-list';
import SelectFilter from '../select-box/filter/filter';
import {connect} from 'react-redux';
import {getProductsRequest} from '../../actions/product-actions';
import {filterSet} from '../../actions/filter-action';

class ProductsView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productList: [],
      currentFilter: this.props.filter,
    };

    this.filterMap = {
      Vowels: 'vowel',
      Consonants: 'consonant',
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  componentWillMount(){
    if(this.props.products.length) return this.handleFilter(this.state.currentFilter);
    this.props.getProducts()
      .then(() => this.setState({
        productList: this.props.products,
      }));
  }

  // componentWillReceiveProps(){
  //   this.setState({
  //     productList: this.props.products,
  //   });
  // }

  handleFilter(filter){
    this.props.setCurrentFilter(filter);
    if(filter === 'All') return this.setState({productList: this.props.products, currentFilter: filter});
    let filteredProducts = this.props.products.filter(prod =>
      (filter !== 'Vowels ( Sometimes Y )' )
        ? prod.type === this.filterMap[filter]
        : ( prod.type === this.filterMap.Vowels || prod.value === 'Y')
    );
    return this.setState({productList: filteredProducts,  currentFilter: filter});
  }

  render(){
    return (
      <section className="products-view-container">
        <h2>Start your own vowel movement!</h2>
        <SelectFilter onFilter={this.handleFilter}
          filter={this.state.currentFilter}/>
        <ProductList products={this.state.productList}/>
      </section>
    );
  }
}


const mapStateToProps = state => ({
  products: state.products,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProductsRequest()),
  setCurrentFilter: filter => dispatch(filterSet(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);