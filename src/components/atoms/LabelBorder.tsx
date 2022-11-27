import React from 'react';

export default function LabelBorder(props: { label: string }) {
  const { label } = props;

  return (
    <h5 className="mt-4 border-bottom fw-bold">
      {label}
    </h5>
  );
}
