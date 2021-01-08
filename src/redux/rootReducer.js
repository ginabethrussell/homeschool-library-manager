import { combineReducers } from 'redux';
import { signupReducer } from './reducers/SignupReducer';

export const rootReducer = combineReducers({
    signup: signupReducer
})
