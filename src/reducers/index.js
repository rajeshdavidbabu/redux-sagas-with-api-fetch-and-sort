import { combineReducers } from 'redux';
import category from './categoryReducer';
import products from './productsReducer';
import errors from './errorsReducer';


 const rootReducer = combineReducers({
  category,
  products,
  errors
 });

 export default rootReducer;