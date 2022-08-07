import { render, screen , getByText } from '@testing-library/react';
import App from './App';

test('renders Header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Developer/i);
  expect(linkElement).toBeInTheDocument();
});

