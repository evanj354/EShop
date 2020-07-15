import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../reducers/index'

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [
        'authReducer',
        'cartReducer',
    ],
    stateReconciler: hardSet
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer);

let persistor = persistStore(store);

//Subscribe a method to the store so each time an action is dispatched against the store the function is called
store.subscribe(() => {
    console.log('Cart Items: ', store.getState());
})

export {store, persistor};

// export { store };