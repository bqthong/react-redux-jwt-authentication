import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

import { LOGIN_IS_LOADING, LOGOUT_IS_LOADING } from './LoginConstants';
import { loginSuccess, loginFail, logoutSuccess, logoutFail, authenticate, unAuthenticate } from './LoginActions';

const loginAPI = (payload) => {
  return axios.post('http://localhost:9000/api/login', payload)
}

const logoutAPI = () => {
  return axios.get('http://localhost:9000/api/logout')
}

function* performLogin(payload) {
  try {
    const response = yield call(loginAPI, payload.requestBody);
    if (response.data.status === 200) {
      yield put(authenticate());
      yield put(loginSuccess(response.data));
      localStorage.setItem('token', response.data.token);
    } else {
      yield put(unAuthenticate());
      yield put(loginFail(response));
    }
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* performLogout() {
  try {
    const response = yield call(logoutAPI);
    yield put(unAuthenticate());
    yield put(logoutSuccess(response.data));
    localStorage.clear();
  } catch (error) {
    yield put(logoutFail(error));
  }
}

export function* watchPerformLogin() {
  yield takeLatest(LOGIN_IS_LOADING, performLogin);
}

export function* watchPerformLogout() {
  yield takeLatest(LOGOUT_IS_LOADING, performLogout);
}
