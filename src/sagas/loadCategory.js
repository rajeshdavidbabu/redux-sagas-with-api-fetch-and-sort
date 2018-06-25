import { call, put } from 'redux-saga/effects';
import { fetchCategory } from './apiCalls';

export function* loadCategory() {
  // Get Category form the API and pauses till we get a resolved promise
  const { response, error } = yield call(fetchCategory);

  if (response) {
    yield put({type: 'FETCH_CATEGORY_SUCCESS', payload: response.data.productIds});
  }
  else {
    yield put({type: 'FETCH_CATEGORY_FAILURE', message: 'category => ' + error.message});
  }
}