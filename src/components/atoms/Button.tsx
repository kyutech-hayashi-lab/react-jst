import React from 'react';
import Button from 'react-bootstrap/Button';

export default function EventCard(props: {
  color: string;
  text: string;
  onClick: () => void;
}) {
  const { color, text, onClick } = props;

  return (
    <Button variant={color} onClick={() => onClick()}>
      {text}
    </Button>
  );
}
