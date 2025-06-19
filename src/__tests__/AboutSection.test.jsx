import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';
import { Statsig } from '@statsig/js-client';

// Mock the Statsig client
jest.mock('@statsig/js-client', () => ({
  Statsig: {
    logEvent: jest.fn(),
    initialize: jest.fn(), // Also mock initialize if it's called directly or indirectly
  },
}));

describe('AboutSection', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    Statsig.logEvent.mockClear();
  });

  test('renders AboutSection component without crashing', () => {
    render(<AboutSection />);
    // Optionally, check for some element to ensure it rendered
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  test('logs about_section_viewed event on mount', () => {
    render(<AboutSection />);
    expect(Statsig.logEvent).toHaveBeenCalledTimes(1);
    expect(Statsig.logEvent).toHaveBeenCalledWith('about_section_viewed');
  });
});
