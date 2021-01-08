import { combineReducers } from 'redux';
import { signupReducer } from './reducers/SignupReducer';
import { loginReducer } from './reducers/LoginReducer';
import { libraryReducer } from './reducers/LibraryReducer';

export const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    library: libraryReducer
})
