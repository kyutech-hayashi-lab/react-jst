import React from 'react';
import { Place } from '../API';
import AccessMap from './units/AccessMap';

export default function AccessInfo(
  props:{place: Place},
) {
  const { place } = props;

  return (
    <div className="container row" style={{ height: '300px' }}>
      <div className="col-md-7">
        <div>
          {place.name}
        </div>
        <div>
          {`〒${place.postCode}`}
        </div>
        <div>
          {place.address}
        </div>
      </div>
      <div className="col-md-5">
        <div className="h-100">
          <AccessMap place={place} />
        </div>
      </div>
    </div>
  );
}
