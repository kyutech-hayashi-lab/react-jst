import React from 'react';
import LabelText from '../atoms/LabelText';

export default function EventCard(props: {
  title: string;
  subscript: string;
  place: string;
  dateTime: Date;
  imgSrc: string;
}) {
  const { title, subscript, place, dateTime, imgSrc } = props;
  return (
    <div
      className="container border-bottom p-4 mb-4"
      style={{ maxWidth: '740px' }}
    >
      <h1>{title}</h1>
      <p>{subscript}</p>
      <div className="row">
        <div className="col-md-8 h-100">
          <LabelText label="場所" text={place} />
          <LabelText label="開催日" text={dateTime.toDateString()} />
          <LabelText label="開催時間" text={dateTime.toTimeString()} />
        </div>
        <div className="col-md-4 h-100">
          <img
            src={imgSrc}
            alt="img"
            className="img-fulied h-100 w-100"
            style={{
              overflow: 'hidden',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
}
