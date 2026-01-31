import { render, screen } from '@testing-library/react';
import App from './App';

test('checks if initial counter value is 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId('count-value');
  expect(counterElement.textContent).toBe("0");
});