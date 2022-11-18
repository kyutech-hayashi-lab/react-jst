import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { Event, ListEventsQuery } from '../API';
import { listEvents } from '../graphql/queries';

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const eventsQueryRes = (await API.graphql(
    graphqlOperation(listEvents, { sortDirection: 'DESC' }),
  )) as GraphQLResult<ListEventsQuery>;
  return eventsQueryRes.data?.listEvents?.items;
});

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    status: 'idle',
    error: null as string | null,
    events: [] as Event[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchEvents.fulfilled, (state, action) => ({
        ...state,
        events: action.payload as Event[],
      }))
      .addCase(fetchEvents.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message ? action.error.message : 'イベントを取得できませんでした',
      }));
  },
});

type eventState = ReturnType<typeof eventsSlice.getInitialState>
export const eventSelector = (state:{events: eventState}) => state.events.events;
export const eventStatusSelector = (state:{events: eventState}) => state.events.status;
export const eventSelectorById = (state:
  {events: eventState}, id: string) => state.events.events.find(
  (event) => event.id === id,
);
export default eventsSlice.reducer;
