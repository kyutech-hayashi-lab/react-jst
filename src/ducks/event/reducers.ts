import * as Actions from './actions';
import initialState from '.';
import { EventsList } from './types';

export interface ActionInterface {
  type: string;
  payload?: any;
}

export default function eventsReducer(
  action: ActionInterface,
  state = initialState.events,
) {
  switch (action.type) {
    case Actions.FETCH_EVENTS:
      return {
        ...state,
        events: action.payload as EventsList,
      };

    default:
      return state;
  }
}
