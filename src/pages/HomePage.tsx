import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import EventCard from '../components/units/EventCard';
import { fetchEvents } from '../ducks/eventsSlice';
import { useAppDispatch, useAppSelector } from '../ducks/hooks';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const events = useAppSelector((state) => state.events.events);
  const eventsStatus = useAppSelector((state) => state.events.status);
  useEffect(() => {
    if (eventsStatus === 'idle') {
      void dispatch(fetchEvents());
    }
  }, [eventsStatus, dispatch]);

  return (
    <div className="row">
      <div className="col-3">
        <Calendar className="m-4" />
      </div>
      <div className="col-9">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            description={event.description}
            place={event.place.name}
            dateTime={event.date}
            imgSrc="https://placehold.jp/150x150.png"
          />
        ))}
      </div>
    </div>
  );
}
