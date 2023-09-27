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

  return (
    <div
      className="p-4 rounded"
      style={{ width: '400px', height: '200px', backgroundColor: color }}
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
        <p className="text-black-50"><small>{description}</small></p>
      </div>
    </div>
  );
}
