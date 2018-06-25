import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../components/product_card';
import ErrorComponent from '../components/error_component';

class ProductList extends Component {

  componentWillMount() {
    this.props.loadProducts(); // dispatches the load products action.
  }

  render() {
    const { products, category, errors=[], loadProducts, sortProducts } = this.props;
    
    if(!products.length) {
      if(errors.length) {
        return <ErrorComponent message={errors} onRetry={loadProducts} />
      }
      return (<div>Loading Products... Please Wait...</div>);
    }
    const list = products.map(({ product }) => (
      <ProductCard key={product['id']} {...product}/>
    ));

    return (
      <div className="productList">
        <div className="productListTitle">
          <button onClick={sortProducts} className="productListSortButton">
              Sort By Price
          </button>
        </div>
        {list}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.category,
  products: state.products,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  loadProducts() {
    return dispatch({type: 'LOAD_PRODUCTS'});
  },
  sortProducts(){
    return dispatch({type: 'SORT_PRODUCTS'});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);