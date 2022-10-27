
import { EventsList } from './types'

export const FETCH_EVENTS = "FETCH_EVENTS";
export const fetchList = (eventsList:EventsList) => {
    return {
        type: "FETCH_USERS",
        payload: eventsList
    }
};