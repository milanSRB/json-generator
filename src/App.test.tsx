import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders links', () => {
  render(<App />);
  const linkUpload = screen.getByText(/UPLOAD JSON/i);
  const linkEdit = screen.getByText(/EDIT JSON/i);
  expect(linkUpload).toBeInTheDocument();
  expect(linkEdit).toBeInTheDocument();
});
