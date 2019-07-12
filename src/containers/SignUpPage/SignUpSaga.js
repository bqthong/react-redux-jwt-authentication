import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

import { SINGUP_IS_LOADING } from './SignUpConstants';
import { signUpSuccess, signUpFail } from './SignUpActions';

const signUpAPI = (payload) => {
  return axios.post('http://localhost:9000/api/signup', payload)
}

function* performSignUp(payload) {
  try {
    const response = yield call(signUpAPI, payload.requestBody);
    if (response.data.status === 200) {
      yield put(signUpSuccess(response.data));
    } else {
      yield put(signUpFail(response.data));
    }
  } catch (error) {
    yield put(signUpFail(error));
  }
}

export function* watchPerformSignUp() {
  yield takeLatest(SINGUP_IS_LOADING, performSignUp);
}
