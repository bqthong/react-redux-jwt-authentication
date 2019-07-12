import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_IS_LOADING, LOGOUT_SUCCESS, LOGOUT_ERROR, LOGOUT_IS_LOADING, AUTHENTICATED, UNAUTHENTICATED } from './LoginConstants';

export const performLogin = (requestBody) => {
  return {
    type: LOGIN_IS_LOADING,
    requestBody
  }
}

export const performLogout = () => {
  return {
    type: LOGOUT_IS_LOADING
  }
}

export const authenticate = () => {
  return {
    type: AUTHENTICATED,
    isAuthenticated: true
  }
}

export const unAuthenticate = () => {
  return {
    type: UNAUTHENTICATED,
    isAuthenticated: false
  }
}

export const loginSuccess = (response) => {
  return {
    type: LOGIN_SUCCESS,
    data: response
  }
}

export const loginFail = (response) => {
  return {
    type: LOGIN_ERROR,
    data: response
  }
}

export const logoutSuccess = (response) => {
  return {
    type: LOGOUT_SUCCESS,
    data: response
  }
}

export const logoutFail = (response) => {
  return {
    type: LOGOUT_ERROR,
    data: response
  }
}