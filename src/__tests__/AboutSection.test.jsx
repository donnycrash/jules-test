import React from 'react';
import { render } from '@testing-library/react';
import AboutSection from '../AboutSection';

test('renders AboutSection component without crashing', () => {
  render(<AboutSection />);
});
