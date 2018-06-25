const category = (state = [], action)  => {
  switch(action.type) {
    case 'FETCH_CATEGORY_SUCCESS' :
      return state.concat(action.payload);
    default :
      return state;
  }
};

export default category;