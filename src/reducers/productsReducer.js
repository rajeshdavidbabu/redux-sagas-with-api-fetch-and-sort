const products = (state = [], action)  => {
  switch(action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return state.concat(action.payload);
    case 'SORT_PRODUCTS':
      return state.slice().sort((a,b)=>a['product']['max_price']-b['product']['max_price']);
    default :
      return state;
  }
};
export default products;
