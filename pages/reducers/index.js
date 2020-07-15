import { combineReducers } from 'redux';

import authReducer from './auth';
import cartReducer from './cart';

const rootReducer = combineReducers({
    authReducer: authReducer,
    cartReducer: cartReducer,
});

export default rootReducer;