import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { orderReducer } from './orderReducer';

const rootReducer = combineReducers({
	user: userReducer,
	order_type: orderReducer
});

export default rootReducer;
