import { combineReducers } from 'redux';
import { signupReducer } from './reducers/SignupReducer';
import { loginReducer } from './reducers/LoginReducer';

export const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer
})
