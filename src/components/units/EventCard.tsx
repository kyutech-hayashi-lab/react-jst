import React, { useState } from 'react';
import LabelText from '../atoms/LabelText';

export default function EventCard(props: {
  title: string;
  description: string;
  place: string;
  date: string;
  startTime: string;
  endTime: string;
  imgSrc: string | null | undefined;
  onClick: ()=>void;
}) {
  const { title, description, place, date, startTime, endTime, imgSrc, onClick } = props;
  const [color, setColor] = useState('white');

  return (
    <div
      className="container row p-4 rounded mb-4 mx-auto shadow"
      style={{ maxWidth: '900px', maxHeight: '300px', backgroundColor: color }}
      onClick={onClick}
      onMouseLeave={() => { setColor('white'); }}
      onMouseEnter={() => { setColor('#e5e5e5'); }}
      role="presentation"
    >
      <div className="col-md-5">
        { imgSrc
      && (
      <div className="h-100 w-100">
        <img
          src={imgSrc}
          alt="イベント画像"
          className="img-fluid rounded"
          style={{
            overflow: 'hidden',
            minWidth: '100%',
            minHeight: '100%',
          }}
        />

      </div>
      )}
      </div>
      <div className="col-md-7">
        <h4>{title}</h4>
        <p><small>{description}</small></p>

        <div className="h-100">
          <LabelText label="場所" text={place} />
          <LabelText label="開催日" text={date} />
          <LabelText label="開催時間" text={`${startTime}~${endTime}`} />
        </div>
      </div>
    </div>
  );
}
