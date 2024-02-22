import { render, screen } from '@testing-library/react';
import App from '../components/App.js';
import forecast from "../data/forecast.json"

test('renders learn react link', () => {
  render(<App location={forecast.location} forecasts={forecast.forecasts}/>);
  const linkElement = screen.getByText(/weather app/i);
  expect(linkElement).toBeInTheDocument();
});
