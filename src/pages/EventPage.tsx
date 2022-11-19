import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MarkerWithPopup from '../components/AccessMap';
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
  if (!event) {
    return (<div>error</div>);
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div>
        <div className="d-flex">
          <h1>{event?.title}</h1>
          <Button href="https://devel-db.d259mard8ld388.amplifyapp.com/">ゴミ検出アプリ</Button>
        </div>
        <div
          className="m-auto"
          style={{
            width: '100%',
          }}
        >
          { event?.imagePath
      && (
        <img
          src={event?.imagePath}
          alt="イベント画像"
          className="img-fluid rounded mb-5"
          style={{
            minWidth: '100%',
            minHeight: '100%',
          }}
        />
      )}
        </div>
        <span>{event?.description}</span>
        <MarkerWithPopup longitude={event?.place.longitude} latitude={event?.place.latitude} />
      </div>
    </div>
  );
}
