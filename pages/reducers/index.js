import { combineReducers } from 'redux';

import authReducer from './auth';
import cartReducer from './cart';
import searchReducer from './search';

const appReducer = combineReducers({
    authReducer: authReducer,
    cartReducer: cartReducer,
    searchReducer: searchReducer,
});

const rootReducer = (state, action) => {
    if (action.type == 'LOGOUT') {
        console.log('REDUX LOGOUT');
        state = undefined;
    }
    return appReducer(state, action);
}

export default rootReducer;