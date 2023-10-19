import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LabelBorder from '../components/atoms/LabelBorder';
import { eventSelector, eventStatusSelector, fetchEvents } from '../ducks/eventsSlice';
import { useAppDispatch, useAppSelector } from '../ducks/hooks';
import AccessInfo from '../components/AccessInfo';
import ResultChart from '../components/ResultChart';

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
    <>
      <div className="ms-5 mt-3">
        <a href="/" className="text-black-50">ホームに戻る</a>
      </div>
      <div className="mx-5 my-4">
        <div>
          <div className="d-flex">
            <h1 className="fw-bold">{event.title}</h1>
          </div>
          <LabelBorder label="説明" />
          <span>{event.description}</span>
          <LabelBorder label="日時" />
          <span>
            {`${event.date} ${event.startTime}〜`}
          </span>
          <LabelBorder label="アクセス" />
          <AccessInfo
            place={event.Place}
          />
        </div>
        <LabelBorder label="結果" />
        <div>
          <ResultChart authID={event.authID} />
        </div>
      </div>
    </>
  );
}
