import React from 'react';
import { render } from '@testing-library/react';
import HeroSection from '../HeroSection';

test('renders HeroSection component without crashing', () => {
  render(<HeroSection />);
});
