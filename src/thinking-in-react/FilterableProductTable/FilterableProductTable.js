import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar.js';
import ProductTable from '../ProductTable/ProductTable.js';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.SearchInput = this.SearchInput.bind(this);
        this.InStock = this.InStock.bind(this);
        this.state = {search: this.props.search, 
                    inStock: this.props.inStock,};
      }
    SearchInput = (e)=>{
        this.setState({search: e.target.value});
    }
    InStock = ()=>{
        let inStock = this.state.inStock;
        this.setState({inStock: !inStock});
    }
  render() {
    // console.log(this.state.search);
    return (
        <div>
            <SearchBar search={this.state.search} stock={this.state.inStock} SearchInput={this.SearchInput} InStock={this.InStock}/>
            <ProductTable search={this.state.search} stock={this.state.inStock} categories={[]}/>
        </div>
    );
  }
}

export default FilterableProductTable;
