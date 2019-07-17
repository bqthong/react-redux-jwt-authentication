import { LOGIN_IS_LOADING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_IS_LOADING, LOGOUT_SUCCESS, LOGOUT_ERROR,  AUTHENTICATED, UNAUTHENTICATED } from './LoginConstants';

const initCountState = {
  message: '',
  hasError: false,
  isLoading: false,
  isAuthenticated: false
}
const LoginReducer = (state = initCountState, action) => {
  switch (action.type) {
    case LOGIN_IS_LOADING:
      return {
        ...state,
        isLoading: true
      }  
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case LOGIN_ERROR:
      return {
        ...state,
        message: action.data.message,
        isLoading: false,
        hasError: true
      }
    case LOGOUT_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      }    
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false
      }    
    case AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      }
    case UNAUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      }        
    default:
      return state
  }
}

export default LoginReducer;