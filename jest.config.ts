// // jest.config.js
// const nextJest = require('next/jest');

// const createJestConfig = nextJest({
//   dir: './',
// });

// const customJestConfig = {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/$1',
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//   },
//   testEnvironment: 'jsdom',
// };

// module.exports = createJestConfig(customJestConfig);



// export default {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/$1',
//   },
//   transform: {
//     '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
//   },
//   testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
 
// };

// import type { Config } from 'jest';

// const config: Config = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/$1',
//     '\\.(css|scss|sass)$': 'identity-obj-proxy',
//   },
//   transformIgnorePatterns: ['<rootDir>/node_modules/'],
// };

// export default config;

// import type { Config } from 'jest';

// const config: Config = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   moduleNameMapper: {
//     '^.+\\.module\\.(css|scss|sass)$': 'identity-obj-proxy',
//     '^.+\\.(css|scss|sass)$': '<rootDir>/__mocks__/styleMock.ts',
//     '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.ts',
//     '^@/(.*)$': '<rootDir>/$1', // if using paths in tsconfig
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
//   transform: {
//     '^.+\\.(ts|tsx)$': 'ts-jest',
//   },
//   globals: {
//   'ts-jest': {
//     tsconfig: './tsconfig.json', // ✅ point to correct tsconfig
//   },
// },
// };

// export default config;

// import type { Config } from 'jest';

// const config: Config = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   // transform: {
//   //   '^.+\\.(ts|tsx)$': 'ts-jest',
//   // },
//   // globals: {
//   //   'ts-jest': {
//   //     tsconfig: './tsconfig.json', // Points to unit test JSX config
//   //   },
//   // },
//   transform: {
//   '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig.json' }],
// },

//   moduleNameMapper: {
//     '^.+\\.module\\.(css|scss)$': 'identity-obj-proxy',
//     '^.+\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.ts',
//     '^.+\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.ts',
//     '^@/(.*)$': '<rootDir>/$1'
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
// };

// export default config;


<<<<<<< HEAD
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig.json' }],
  },
=======
//////////////// below command 14 sep 26/////////

// import type { Config } from 'jest';

// const config: Config = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   transform: {
//     '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig.json' }],
//   },
//   moduleNameMapper: {
//     '^.+\\.module\\.(css|scss)$': 'identity-obj-proxy',
//     '^.+\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.ts',
//     '^.+\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.ts',
//     '^@/(.*)$': '<rootDir>/$1',
//     '^next/font/google$': '<rootDir>/__mocks__/nextFontGoogleMock.ts',
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
// };

// export default config;


import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

>>>>>>> 98ed8f2 (update 14-sep-26 purpose landing page changed)
  moduleNameMapper: {
    '^.+\\.module\\.(css|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.ts',
    '^.+\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.ts',
    '^@/(.*)$': '<rootDir>/$1',
<<<<<<< HEAD
    '^next/font/google$': '<rootDir>/__mocks__/nextFontGoogleMock.ts',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

export default config;
=======
    '^next/font/google$':
      '<rootDir>/__mocks__/nextFontGoogleMock.ts',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  testMatch: [
    '<rootDir>/tests/**/*.test.ts',
    '<rootDir>/tests/**/*.test.tsx',
  ],
};

export default createJestConfig(config);
>>>>>>> 98ed8f2 (update 14-sep-26 purpose landing page changed)
