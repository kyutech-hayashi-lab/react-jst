import { EventsList } from './types'

export const fetchUsersList = () => {
	return async (dispatch: any) => {
		let eventsList: EventsList = [
			{
				name: 'test',
				place: '飯塚',
				organizer: '竹本'
			}
		];
		return eventsList
	}
}