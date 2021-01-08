import * as actions from  '../actions/SignupActions';

const initialState = {
    fetchingUser: false,
    error: '',
    loggedIn: false,
    username: '',
    email: '',
}

export const signupReducer = ( state=initialState, action ) => {
    switch(action.type){
        case actions.USER_SIGNUP_START: 
            return {
                ...state,
                fetchingUser: true,
                error: ''
            }
        case actions.USER_SIGNUP_SUCCESS:
            console.log('success', action.payload);
            return {
                ...state,
                fetchingUser: false,
                loggedIn: true,
                error: '',
                username: `${action.payload.firstName} ${action.payload.lastName}`,
                email: action.payload.email,
            }
        case actions.USER_SIGNUP_FAILURE:
            return {
                ...state,
                fetchingUser: false,
                loggedIn: false,
                error: action.payload,
                username: '',
                email: '',
                bookList: [],
                wishList: []
            }
        
        default: return state
    }
}