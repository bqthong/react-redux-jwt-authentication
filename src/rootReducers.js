import { combineReducers } from 'redux';

/**
 * All reducers
 */
import LoginReducer from './containers/LoginPage/LoginReducer';
import SignUpReducer from './containers/SignUpPage/SignUpReducer';

/**
 * Root reducer
 */
const rootReducers = combineReducers({
  login: LoginReducer,
  signup: SignUpReducer
});
export default rootReducers;