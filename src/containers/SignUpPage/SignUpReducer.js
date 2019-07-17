import { SINGUP_IS_LOADING, SINGUP_SUCCESS, SINGUP_ERROR } from './SignUpConstants';

const initCountState = {
  message: '',
  hasError: false,
  isSuccess: false,
  isLoading: false
}

const SignUpReducer = (state = initCountState, action) => {
  switch (action.type) {
    case SINGUP_IS_LOADING:
      return {
        ...state,
        isLoading: true
      } 
    case SINGUP_SUCCESS:
      return {
        ...state,
        message: action.response.message,
        isSuccess: true,
        isLoading: false
      }
    case SINGUP_ERROR:
      return {
        ...state,
        message: action.response.message,
        hasError: true,
        isLoading: false
      }  
    default:
      return state
  }
}

export default SignUpReducer;