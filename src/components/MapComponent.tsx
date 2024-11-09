import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapComponent.module.scss';

interface MapComponentProps {
    lat: number;
    lng: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng }) => {
    const mapRef = useRef<L.Map | null>(null);
  
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (mapRef.current === null) {
            mapRef.current = L.map('map').setView([lat, lng], 16);
    
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRef.current);
    
            L.marker([lat, lng]).addTo(mapRef.current)
                .bindPopup('A pretty CSS popup.<br> Easily customizable.')
                .openPopup();
            } else {
            mapRef.current.setView([lat, lng], 13);
            L.marker([lat, lng]).addTo(mapRef.current)
                .bindPopup('A pretty CSS popup.<br> Easily customizable.')
                .openPopup();
            }
        }
    }, [lat, lng]);
  
    return <div id="map" className={styles.map}></div>;
};

export default MapComponent;