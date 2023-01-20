import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo list', () => {
  render(<App />);
  const listElement = screen.getByText(/My List/i);
  expect(listElement).toBeInTheDocument();
});
