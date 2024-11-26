module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '^leaflet$': '<rootDir>/src/__mocks__/leaflet.js',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
};