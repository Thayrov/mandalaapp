import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
    authReducer,
    cartReducer,
    categoryReducer,
    favsReducer,
    ordersReducer,
    productReducer,
} from './reducers';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer,
    favorites: favsReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));
