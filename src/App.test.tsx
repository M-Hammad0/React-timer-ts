import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

afterEach(cleanup)

test('renders app component', () => {
  const { asFragment } = render(<App />);
  expect(asFragment).toMatchSnapshot();
});
