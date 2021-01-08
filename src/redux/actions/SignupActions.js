//import axios for async api calls
import axios from 'axios';

// Create action types
export const USER_SIGNUP_START = 'USER_SIGNUP_START';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILURE = "USER_SIGNUP_FAILURE";

//Create action creators

export const userSignupStart = () => {
    return {
        type: USER_SIGNUP_START
    }
}

export const userSignupSuccess = (user) => {
    return {
        type: USER_SIGNUP_SUCCESS,
        payload: user
    }
}

export const userSignupFailure = (error) => {
    return {
        type: USER_SIGNUP_FAILURE,
        payload: error
    }
}

export const userSignup = (user) => (dispatch) => {
    console.log(user);
    dispatch(userSignupStart);
    axios.post('https://reqres.in/api/users', user)
    .then(response => {
        dispatch(userSignupSuccess(response.data))
    })
    .catch(err => {
        dispatch(userSignupFailure(err.error))
    })
}