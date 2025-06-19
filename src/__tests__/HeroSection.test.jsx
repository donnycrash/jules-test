import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';
import { useGate } from '@statsig/react-bindings';

// Mock @statsig/react-bindings
jest.mock('@statsig/react-bindings', () => ({
  useGate: jest.fn(),
  StatsigProvider: ({ children }) => <>{children}</>, // Mock provider if needed by children
}));

describe('HeroSection', () => {
  test('renders HeroSection component without crashing', () => {
    // Provide a default mock for useGate for the simple render test
    useGate.mockReturnValue({ value: false, isLoading: false, rule_id: 'default' });
    render(<HeroSection />);
    // Optionally, check for some element to ensure it rendered
    expect(screen.getByAltText('Dassie')).toBeInTheDocument();
  });

  describe('A/B Test: hero_button_experiment', () => {
    test('displays "New Button Text" when useGate returns true', () => {
      useGate.mockReturnValue({ value: true, isLoading: false, rule_id: 'experiment_on' });
      render(<HeroSection />);
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('New Button Text');
    });

    test('displays "Learn More" when useGate returns false', () => {
      useGate.mockReturnValue({ value: false, isLoading: false, rule_id: 'experiment_off' });
      render(<HeroSection />);
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Learn More');
    });
  });
});
