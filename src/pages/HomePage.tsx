import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from '../components/units/EventCard';
import DateSearch from '../components/DateSearch';
import { eventSelector, eventStatusSelector, fetchEvents } from '../ducks/eventsSlice';
import { useAppDispatch, useAppSelector } from '../ducks/hooks';

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
      <img src="/top-image.png" alt="海の画像" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      <div style={{ width: '25%', height: '70px', backgroundColor: 'rgba(157,204,224,0.3)' }}>
        <div style={{ width: '200px', marginLeft: 'auto' }}>
          <h3 style={{ fontWeight: 'bold', padding: '16px' }}>イベント一覧</h3>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="row" style={{ width: '90em' }}>
          <div className="col-3">
            <DateSearch startDate={startDate} setStartDate={setStartDate} />
          </div>
          <div className="col-9">
            {eventsSorted.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                place={event.place.name}
                date={event.date}
                startTime={event.startTime}
                imgSrc={event.imagePath}
                onClick={() => { navigate(`/event/${event.id}`); }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
