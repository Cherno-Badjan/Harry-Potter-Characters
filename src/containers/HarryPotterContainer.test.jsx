import React from 'react';
import { screen, render } from '@testing-library/react';
import HarryPotterContainer from './HarryPotterContainer';

describe('HarryPotterContainer', () => {
  it('displays a list of Harry Potter characters', async () => {
    render(<HarryPotterContainer />);

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
  });
});
