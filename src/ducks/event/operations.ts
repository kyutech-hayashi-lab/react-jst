import { EventsList } from './types';

export default function fetchUsersList() {
  const eventsList: EventsList = [
    {
      name: 'test',
      place: '飯塚',
      organizer: '竹本',
    },
  ];
  return eventsList;
}
