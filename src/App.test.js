import { render, screen } from '@testing-library/react';
import App from './App';
import { UserProvider } from './context/UserContext';
import { EntryProvider } from './context/EntryContext';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

test('should render header and sign-in form', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <EntryProvider>
          <App />
        </EntryProvider>
      </UserProvider>
    </MemoryRouter>
  );

  const loginInput = screen.getByRole('textbox', { name: /name:/i });
  userEvent.type(loginInput, 'Emma');

  const passwordInput = screen.getByRole('textbox', { name: /password:/i });
  userEvent.type(passwordInput, '123456');

  const loginButton = screen.getByRole('button', { name: /submit/i });
  userEvent.click(loginButton);

  const header = screen.getByRole('heading', { name: /guestbook/i });
  const formTitle = screen.getByRole('heading', { name: /sign here/i });
  const msgLabel = screen.getByLabelText(/Guest Message/i);
  const msgInput = screen.getByRole('textbox', { name: /guest message/i });
  const button = screen.getByRole('button', { name: /submit/i });

  expect(header).toBeInTheDocument();
  expect(formTitle).toBeInTheDocument();
  expect(msgLabel).toBeInTheDocument();
  expect(msgInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
