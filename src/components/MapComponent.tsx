import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import styles from './MapComponent.module.scss';
import { MapComponentProps } from "../types/types";

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng }) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const loadMap = async () => {
      const L = await import('leaflet');

      const myIcon = L.icon({
        iconUrl: '/assets/icon-location.svg',
        iconSize: [40, 46],
      });

      if (mapRef.current === null) {
        mapRef.current = L.map('map').setView([lat, lng], 16);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapRef.current);

        L.marker([lat, lng], { icon: myIcon }).addTo(mapRef.current)
          .openPopup();
      } else {
        mapRef.current.setView([lat, lng], 16);
        L.marker([lat, lng], { icon: myIcon }).addTo(mapRef.current)
          .openPopup();
      }
    };

    if (typeof window !== 'undefined') {
      loadMap();
    }
  }, [lat, lng]);

  return <div id="map" className={styles.map}></div>;
};

export default MapComponent;