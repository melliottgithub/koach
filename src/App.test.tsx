import { render, screen } from '@testing-library/react';
import App from './App';

test('renders menu items', () => {
  render(<App />);
  const homeElement = screen.getByText(/Home/i);
  const aboutElement = screen.getByText(/About/i);
  const contactElement = screen.getByText(/Contact/i);
  expect(homeElement).toBeInTheDocument();
  expect(aboutElement).toBeInTheDocument();
  expect(contactElement).toBeInTheDocument();
});
