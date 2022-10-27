import * as Actions from './actions';
import {initialState} from './index'

export const eventsReducer = (state = initialState.events, action:any)  => {
	switch (action.type) {
		case Actions.FETCH_EVENTS:
			return {
				...state,
				users: action.payload
			};

		default:
			return state
	}
};