import axios from 'axios';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';


export const loginUserStart = () => {
    return {
        type: LOGIN_USER_START
    }
}
export const loginUserSuccess = (user) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user
    }
}
export const loginUserFailure = (error) => {
    return {
        type: LOGIN_USER_FAILURE,
        payload: error
    }
}


export const logInUser = (user) => (dispatch) => {
    console.log("logging in", user);
    const data = JSON.stringify(user);
    const config = {
        method: 'post',
        url: 'https://reqres.in/api/users',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

    dispatch(loginUserStart);
    console.log("logging in user", user);
    axios(config)
    .then(response => {
        console.log('Succcessful login', JSON.stringify(response.data))
        dispatch(loginUserSuccess(response.data))
    })
    .catch(err => {
        dispatch(loginUserFailure(err.error))
    })
}


