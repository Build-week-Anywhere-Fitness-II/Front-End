import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Login from './components/login';


test('renders app', () => {
const {getByText} = render(<Login/>);
  const username = getByText(/username/i);
  expect(username).toBeInTheDocument();
}) 