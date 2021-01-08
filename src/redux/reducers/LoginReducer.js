import * as actions from  '../actions/LoginActions';
import { LOG_OUT_USER } from '../actions/UserActions';

const initialState = {
    fetchingUser: false,
    error: '',
    loggedIn: false,
    id: ''
}
    
export const loginReducer = ( state=initialState, action ) => {
    switch(action.type){
        case actions.LOGIN_USER_START: 
        console.log('Starting user login');
            return {
                ...state,
                fetchingUser: true,
                loggedIn: false,
                error: '',
                id: ''
            }
        case actions.LOGIN_USER_SUCCESS:
            console.log('login success', action.payload);
            return {
                ...state,
                fetchingUser: false,
                loggedIn: true,
                id: action.payload.id,
                error: ''
            }
        case actions.LOGIN_USER_FAILURE:
            console.log('error', action.payload);
            return {
                ...state,
                fetchingUser: false,
                loggedIn: false,
                error: action.payload,
                id: '',
                email: ''
            }
        case LOG_OUT_USER:
            console.log("logging out user")
            return {
                initialState
            }
    
        default: return state
    }
}