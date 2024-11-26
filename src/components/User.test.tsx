import React from 'react';
import { render, screen } from '@testing-library/react';
import User from './User';
import { UserProps } from '../types/types';
import '@testing-library/jest-dom';

const mockIpData: UserProps['ipData'] = {
  ip: '192.168.0.1',
  location: {
    region: 'NY',
    country: 'US',
    timezone: '-05:00',
    lat: 40.7128,
    lng: -74.0060,
  },
  isp: 'Mock ISP',
};

describe('User Component', () => {
    it('renders without crashing', () => {
        render(<User ipData={null} />);
        expect(screen.getByText('IP Address')).toBeInTheDocument();
        expect(screen.getByText('Location')).toBeInTheDocument();
        expect(screen.getByText('Timezone')).toBeInTheDocument();
        expect(screen.getByText('ISP')).toBeInTheDocument();
    });

    it('displays "N/A" when ipData is null', () => {
        render(<User ipData={null} />);
        const naElements = screen.getAllByText('N/A');
        expect(naElements).toHaveLength(4);
        naElements.forEach(element => {
            expect(element).toBeInTheDocument();
        });
    });

    it('displays IP data correctly', () => {
        render(<User ipData={mockIpData} />);
        expect(screen.getByText('192.168.0.1')).toBeInTheDocument();
        expect(screen.getByText('NY, US')).toBeInTheDocument();
        expect(screen.getByText('UTC -05:00')).toBeInTheDocument();
        expect(screen.getByText('Mock ISP')).toBeInTheDocument();
    });

    it('handles missing location data gracefully', () => {
        const incompleteIpData = { ...mockIpData, location: null };
        render(<User ipData={incompleteIpData} />);
        expect(screen.getByText('192.168.0.1')).toBeInTheDocument();
        const naElements = screen.getAllByText('N/A');
        expect(naElements).toHaveLength(2); // Solo 2 elementos deberían mostrar "N/A"
        naElements.forEach(element => {
          expect(element).toBeInTheDocument();
        });
        expect(screen.getByText('Mock ISP')).toBeInTheDocument();
      });
});