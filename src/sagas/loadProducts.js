import { call, put, select , take} from 'redux-saga/effects';
import { fetchProducts } from './apiCalls';

export function* loadProducts() {
  // Take the category information from the updated Global State.
  const category = yield select((state) => state.category);

  const { response, error } = yield call(fetchProducts, category);

  if (response) {
    yield put({type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data});
  }
  else {
    yield put({type: 'FETCH_PRODUCTS_FAILURE', message: 'products => '+ error.message});
  }  
}