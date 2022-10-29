import React from 'react';
import Calendar from 'react-calendar';
import EventCard from '../components/units/EventCard';

export default function HomePage() {
  return (
    <div className="row">
      <div className="col-3">
        <Calendar className="m-4" />
      </div>
      <div className="col-9">
        <EventCard
          title="test"
          subscript="test test test test test test test test test test"
          place="飯塚"
          dateTime={new Date()}
          imgSrc="https://placehold.jp/150x150.png"
        />
        <EventCard
          title="test"
          subscript="test test test test test test test test test test"
          place="飯塚"
          dateTime={new Date()}
          imgSrc="https://placehold.jp/150x150.png"
        />
        <EventCard
          title="test"
          subscript="test test test test test test test test test test"
          place="飯塚"
          dateTime={new Date()}
          imgSrc="https://placehold.jp/150x150.png"
        />
        <EventCard
          title="test"
          subscript="test test test test test test test test test test"
          place="飯塚"
          dateTime={new Date()}
          imgSrc="https://placehold.jp/150x150.png"
        />
      </div>
    </div>
  );
}
