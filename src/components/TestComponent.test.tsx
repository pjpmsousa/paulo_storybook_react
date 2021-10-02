import React from 'react';
import { render, screen } from '@testing-library/react';
import TestComponent from './TestComponent'

test('check for specific text in the new component', () => {
  render(<TestComponent title='' description='new '/>);
  const text = screen.getByText('trying unit tests');
  expect(text).toBeInTheDocument();
});