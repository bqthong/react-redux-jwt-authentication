import { all } from 'redux-saga/effects';

/**
 * All saga
 */
import { watchPerformLogin, watchPerformLogout } from './containers/LoginPage/LoginSaga';
import { watchPerformSignUp } from './containers/SignUpPage/SignUpSaga';

/**
 * Root saga
 */
export default function* rootSaga() {
  yield all([
    watchPerformLogin(),
    watchPerformLogout(),
    watchPerformSignUp()
  ]);
}