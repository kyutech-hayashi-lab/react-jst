import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { eventSelector, eventStatusSelector, fetchEvents } from '../ducks/eventsSlice';
import { useAppDispatch, useAppSelector } from '../ducks/hooks';

export default function EventPage() {
  const dispatch = useAppDispatch();
  const eventsStatus = useAppSelector(eventStatusSelector);
  useEffect(() => {
    if (eventsStatus === 'idle') {
      void dispatch(fetchEvents());
    }
  }, [eventsStatus, dispatch]);
  const params = useParams<{ id: string }>();
  const events = useAppSelector(eventSelector);
  const event = events.find((e) => e.id === params.id);

  return (
    <h1>{event?.title}</h1>
  );
}
