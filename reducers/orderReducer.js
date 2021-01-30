let initialState = '';

// load cart items from localstorage
// check if we have the window object. If yes we can access localstorage
if (typeof window !== 'undefined') {
	if (localStorage.getItem('order_type')) {
		initialState = localStorage.getItem('order_type');
	} else {
		initialState = '';
	}
}

export const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ORDER_TYPE':
			return action.payload; //payload will contain all user information and then will be available in the global state
		default:
			return state;
	}
};
