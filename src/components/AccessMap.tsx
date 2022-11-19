import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';

L.Icon.Default.imagePath = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';

export default function MarkerWithPopup(props:{longitude: number, latitude: number}) {
  const { longitude, latitude } = props;
  const position = new LatLng(latitude, longitude);

  return (
    <MapContainer center={position} zoom={16} style={{ height: '100%', minHeight: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          {' '}
          <br />
          {' '}
          Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
