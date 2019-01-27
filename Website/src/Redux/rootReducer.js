import { combineReducers } from 'redux'
import authReducer from './Reducers/authReducer';
import shopReducer from './Reducers/shopReducer';

export default combineReducers({
    authReducer,
    shopReducer
})
