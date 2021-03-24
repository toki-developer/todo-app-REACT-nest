import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  test('matchs snapshot' , () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot();
  });
})