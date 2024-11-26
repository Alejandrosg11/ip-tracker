const L = {
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
    })), // Devuelve un objeto válido para L.icon
  };
  
  export default L;