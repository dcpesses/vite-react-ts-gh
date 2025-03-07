import '@testing-library/jest-dom';
import { afterEach, beforeEach } from 'vitest';

import {
  mockWindowHistory,
  mockWindowLocation,
  restoreWindowHistory,
  restoreWindowLocation
} from './mockWindowLocation';

beforeEach(() => {
  mockWindowLocation('http://localhost:5173/vite-react-ts-gh');
  mockWindowHistory();
});

afterEach(() => {
  restoreWindowLocation();
  restoreWindowHistory();
});
