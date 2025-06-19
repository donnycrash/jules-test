import React from 'react';
import { render } from '@testing-library/react';
import VideoBackground from '../VideoBackground';

test('renders VideoBackground component without crashing', () => {
  render(<VideoBackground />);
});
