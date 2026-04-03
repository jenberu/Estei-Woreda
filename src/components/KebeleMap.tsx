import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icons
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export interface KebeleLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  info: string;
}

const locations: KebeleLocation[] = [
  { id: '1', name: 'Estie Town (Andabet)', lat: 11.6, lng: 38.03, info: 'The administrative capital of Estie Woreda.' },
  { id: '2', name: 'Gumayde Kebele', lat: 11.58, lng: 38.05, info: 'Known for its historical churches and agricultural productivity.' },
  { id: '3', name: 'Zeway Kebele', lat: 11.62, lng: 38.01, info: 'A scenic kebele with highland landscapes.' },
  { id: '4', name: 'Mekit Kebele', lat: 11.55, lng: 37.98, info: 'Home to traditional irrigation systems and terraced farms.' },
  { id: '5', name: 'Debre Tsehay', lat: 11.65, lng: 38.08, info: 'Historic mountain monastery and viewpoints.' },
];

export const KebeleMap: React.FC = () => {
  const centerPosition: [number, number] = [11.6, 38.03];
  
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 z-0">
      <MapContainer 
        // @ts-ignore
        center={centerPosition} 
        // @ts-ignore
        zoom={11} 
        // @ts-ignore
        scrollWheelZoom={false} 
        className="h-full w-full"
      >
        <TileLayer
          // @ts-ignore
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-primary">{loc.name}</h3>
                <p className="text-sm">{loc.info}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};