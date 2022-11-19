import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Place } from '../../API';

L.Icon.Default.imagePath = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';

export default function AccessMap(
  props:{place: Place},
) {
  const { place } = props;
  const position = new LatLng(place.latitude, place.longitude);

  return (
    <MapContainer className="h-100" center={position} zoom={14}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {place.name}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
