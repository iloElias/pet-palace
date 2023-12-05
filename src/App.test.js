import { render, screen } from '@testing-library/react';
import { App, NotAllowed } from './App';

test('renders seja bem vindo link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Seja bem-vindo ao Pet Palace/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders nao permitido component', () => {
  render(<NotAllowed />);
  const headerElement = screen.getByText(/Página não encontrada/i);
  expect(headerElement).toBeInTheDocument();
});