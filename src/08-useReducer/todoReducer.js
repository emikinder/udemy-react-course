


export const todoReducer = (initialState = [], action) => {
	switch (action.type) {
		case '1':
			throw new Error('action.type = 1 doesnt exists');
		case '2':
			throw new Error('action.type = 2 doesnt exists');
		default:
            return initialState;
			break;
	}
};
