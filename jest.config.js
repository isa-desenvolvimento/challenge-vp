module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePathIgnorePatterns: ['<rootDir>/cypress'],
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    // '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    'ˆstyled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
    '@/(.*)': '<rootDir>/src/$1',
  },
}
