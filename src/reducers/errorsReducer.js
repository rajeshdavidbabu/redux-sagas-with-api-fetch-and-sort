const errors = (state = [], action)  => {
  switch(action.type) {
    case 'FETCH_CATEGORY_FAILURE' :
    case 'FETCH_PRODUCTS_FAILURE' :
      return [...state, action.message];
    default :
      return state;
  }
};

export default errors;