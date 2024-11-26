import React from 'react';
import { render, screen } from '@testing-library/react';
import MapComponent from './MapComponent';
import L from 'leaflet';

jest.mock('leaflet', () => ({
  map: jest.fn(() => ({
    setView: jest.fn(),
    addLayer: jest.fn(),
  })),
  tileLayer: jest.fn(() => ({
    addTo: jest.fn(),
  })),
  marker: jest.fn(() => ({
    addTo: jest.fn().mockReturnThis(),
    openPopup: jest.fn(),
  })),
  icon: jest.fn(() => ({
    iconUrl: '',
    iconSize: [0, 0],
  })),
}));

describe('MapComponent', () => {
  it('renders the map container', () => {
    render(<MapComponent lat={19.449252} lng={-99.1638502} />);
    const mapElement = screen.getByTestId('map-container');
    expect(mapElement).toBeInTheDocument();
  });

  it('initializes the map with the correct coordinates', () => {
    render(<MapComponent lat={19.449252} lng={-99.1638502} />);
    expect(L.map).toHaveBeenCalledWith('map');
    const mapInstance = L.map.mock.results[0].value;
    expect(mapInstance.setView).toHaveBeenCalledWith([19.449252, -99.1638502], 16);
  });

  it('adds a marker to the map', () => {
    render(<MapComponent lat={19.449252} lng={-99.1638502} />);
    expect(L.marker).toHaveBeenCalledWith([19.449252, -99.1638502], expect.any(Object));
    const markerInstance = L.marker.mock.results[0].value;
    expect(markerInstance.addTo).toHaveBeenCalled();
  });
});