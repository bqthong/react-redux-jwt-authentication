import { SINGUP_SUCCESS, SINGUP_ERROR, SINGUP_IS_LOADING } from './SignUpConstants';

export const performSignUp = (requestBody) => {
  return {
    type: SINGUP_IS_LOADING,
    requestBody
  }
}
export const signUpSuccess = (response) => {
  return {
    type: SINGUP_SUCCESS,
    response: response
  }
}

export const signUpFail = (response) => {
  return {
    type: SINGUP_ERROR,
    response: response
  }
}