import React from 'react';
import Button from 'react-bootstrap/Button';

export default function EventCard(props: { color: string }) {
  const { color } = props;
  return <Button variant={color}>Go somewhere</Button>;
}
