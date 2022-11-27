import React from 'react';
import Badge from 'react-bootstrap/Badge';

export default function LabelText(props: { label: string; text: string }) {
  const { label, text } = props;

  return (
    <h6>
      <Badge className="me-3" bg="secondary" style={{ width: '80px' }}>
        {label}
      </Badge>
      {text}
    </h6>
  );
}
