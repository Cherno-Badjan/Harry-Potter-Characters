import React from 'react';
import { screen, render } from '@testing-library/react';
import HarryPotterContainer from './HarryPotterContainer';

describe('HarryPotterContainer', () => {
  it('displays a list of Harry Potter characters', async () => {
    render(<HarryPotterContainer />);

    screen.getByText('Loading...');
  });
});
