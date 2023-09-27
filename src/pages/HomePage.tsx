import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from '../components/units/EventCard';
import DateSearch from '../components/DateSearch';
import { eventSelector, eventStatusSelector, fetchEvents } from '../ducks/eventsSlice';
import { useAppDispatch, useAppSelector } from '../ducks/hooks';
import Header from '../components/Header';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const events = useAppSelector(eventSelector);
  const eventsSorted = [...events];
  eventsSorted.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    return 1;
  });
  const eventsStatus = useAppSelector(eventStatusSelector);
  useEffect(() => {
    if (eventsStatus === 'idle') {
      void dispatch(fetchEvents());
    }
  }, [eventsStatus, dispatch]);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <div className="row pt-5 mt-5" style={{ width: '90em' }}>
          <div className="col-4">
            <DateSearch className="ms-5 position-fixed" startDate={startDate} setStartDate={setStartDate} />
          </div>
          <div className="col-8">
            {eventsSorted.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                place={event.place.name}
                date={event.date}
                onClick={() => { navigate(`/event/${event.id}`); }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
