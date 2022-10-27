export interface EventInfo {
    name: string
    place: string
    organizer: string
}

export interface EventsList extends Array<EventInfo>{}