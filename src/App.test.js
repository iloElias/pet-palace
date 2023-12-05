import { render, screen } from "@testing-library/react";
import { App, NotAllowed } from "./App";
import Header from "./Components/Header";
import PopupTemplate from "./Components/PopupTemplate";

test("renders PopupTemplate component", () => {
  render(
    <PopupTemplate onClose={() => {}} title="Test Popup">
      <p>Content goes here...</p>
    </PopupTemplate>
  );

  const popupTitle = screen.getByText(/Test Popup/i);
  const contentText = screen.getByText(/Content goes here/i);

  expect(popupTitle).toBeInTheDocument();
  expect(contentText).toBeInTheDocument();
});

test("renders seja bem vindo link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Seja bem-vindo ao Pet Palace/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders nao permitido component", () => {
  render(<NotAllowed />);
  const headerElement = screen.getByText(/403 - Página não pode ser acessada/i);
  expect(headerElement).toBeInTheDocument();
});
