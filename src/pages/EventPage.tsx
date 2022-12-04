import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LabelBorder from '../components/atoms/LabelBorder';
import { eventSelector, eventStatusSelector, fetchEvents } from '../ducks/eventsSlice';
import { useAppDispatch, useAppSelector } from '../ducks/hooks';
import AccessInfo from '../components/AccessInfo';

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
    if (eventsStatus === 'loading') {
      return (<div>loading</div>);
    }
    return (<div>error</div>);
  }

  return (
    <div className="d-flex justify-content-center my-5">
      <div>
        <div className="d-flex">
          <h1 className="fw-bold">{event.title}</h1>
        </div>
        <div
          className="m-auto mb-2 border-radius"
          style={{
            overflow: 'hidden',
            width: '100%',
            height: '300px',
          }}
        >
          { event.imagePath
      && (
        <img
          src={event.imagePath}
          alt="イベント画像"
          style={{
            minWidth: '100%',
            minHeight: '100%',
          }}
        />
      )}
        </div>
        <LabelBorder label="説明" />
        <span>{event.description}</span>
        <LabelBorder label="日時" />
        <span>
          {event.date}
          {event.startTime}
        </span>
        <LabelBorder label="アクセス" />
        <AccessInfo
          place={event.place}
        />
      </div>
    </div>
  );
}
