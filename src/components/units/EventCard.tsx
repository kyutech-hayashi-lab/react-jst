import React, { useState } from 'react';
import { BiMap } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';

export default function EventCard(props: {
  title: string;
  description: string;
  place: string;
  date: string;
  onClick: ()=>void;
}) {
  const { title, description, place, date, onClick } = props;
  const [color, setColor] = useState('white');

  const containerStyle = {
    width: '400px',
    height: '200px',
    backgroundColor: color,
    overflow: 'hidden',
  };

  const descriptionStyle = {
    height: '80px',
    overflow: 'hidden',
    fontSize: '14px',
  };

  return (
    <div
      className="p-2 mt-2 rounded"
      style={containerStyle}
      onClick={onClick}
      onMouseLeave={() => { setColor('white'); }}
      onMouseEnter={() => { setColor('#e5e5e5'); }}
      role="presentation"
    >
      <div>
        <AiOutlineCalendar />
        <span className="ms-2"><small>{date}</small></span>
        <br />
        <BiMap />
        <span className="ms-2"><small>{place}</small></span>
        <h6 className="mt-2"><u>{title}</u></h6>
        <div className="text-black-50" style={descriptionStyle}>
          {description}
        </div>
      </div>
    </div>
  );
}
