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
    // const response = yield call(loginAPI, payload.requestBody);
    const fakeResponse = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7BhQ'
      },
      data: {
        status: 200,
        message: 'Logged in successfully !'
      }
    } 
    if (fakeResponse.data.status === 200 && payload.requestBody.username === 'admin' && payload.requestBody.password === 'admin') {
      yield put(authenticate());
      yield put(loginSuccess(fakeResponse.data));
      const token = fakeResponse.headers.Authorization.replace('Bearer ',''); 
      localStorage.setItem('token', token);
    } else {
      yield put(unAuthenticate());
      fakeResponse.data.message = 'Username or password is incorrect !';
      yield put(loginFail(fakeResponse.data));
    }
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* performLogout() {
  try {
    // const response = yield call(logoutAPI);
    const fakeResponse = {
      data: {
        status: 200,
        message: 'Logged out successfully !'
      }
    }
    yield put(unAuthenticate());
    yield put(logoutSuccess(fakeResponse.data));
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
