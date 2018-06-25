import { takeLatest } from 'redux-saga/effects';
import { loadCategory } from './loadCategory';
import { loadProducts } from './loadProducts';

function* rootSaga() {
  yield [
    takeLatest('LOAD_PRODUCTS', loadCategory), // Saga waits until the latest action 'LOAD_PRODUCTS'
    takeLatest('FETCH_CATEGORY_SUCCESS', loadProducts),
  ];
}

export default rootSaga;