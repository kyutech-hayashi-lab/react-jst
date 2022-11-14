import React from 'react';
import LabelText from '../atoms/LabelText';

export default function EventCard(props: {
  title: string;
  description: string;
  place: string;
  dateTime: string;
  imgSrc: string;
}) {
  const { title, description, place, dateTime, imgSrc } = props;
  return (
    <div className="container border-bottom p-4 mb-4" style={{ maxWidth: '740px' }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="row">
        <div className="col-md-8 h-100">
          <LabelText label="場所" text={place} />
          <LabelText label="開催日" text={dateTime} />
          <LabelText label="開催時間" text={dateTime} />
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
