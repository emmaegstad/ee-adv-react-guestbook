import { render, screen } from '@testing-library/react';
import App from './App';
import { UserProvider } from './context/UserContext';
import { EntryProvider } from './context/EntryContext';
import userEvent from '@testing-library/user-event';

test('should render header and sign-in form', async () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );

  const header = await screen.findByRole('heading', { name: /Guestbook/i });
  const subheader = screen.getByText(/please sign the guestbook!/i);
  const formTitle = screen.getByRole('heading', { name: /sign here/i });
  const nameLabel = screen.getByLabelText(/Guest Name/i);
  const nameInput = screen.getByRole('textbox', { name: /guest name/i });
  const msgLabel = screen.getByLabelText(/Guest Message/i);
  const msgInput = screen.getByRole('textbox', { name: /guest message/i });
  const button = screen.getByRole('button', { name: /submit/i });

  expect(header).toBeInTheDocument();
  expect(subheader).toBeInTheDocument();
  expect(formTitle).toBeInTheDocument();
  expect(nameLabel).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(msgLabel).toBeInTheDocument();
  expect(msgInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test.skip('should render entry upon submit', async () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );

  const button = screen.getByRole('button', { name: /submit/i });
  const nameInput = screen.getByRole('textbox', { name: /guest name/i });
  const msgInput = screen.getByRole('textbox', { name: /guest message/i });

  userEvent.type(nameInput, 'Emma');
  userEvent.type(msgInput, 'My awesome message');
  userEvent.click(button);

  expect(await screen.findByRole('heading', { name: /Emma/i })).toBeInTheDocument();
  expect(await screen.findByText(/My awesome message/i)).toBeInTheDocument();
});

test.skip('should render logout button upon submit', async () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );

  const button = await screen.findByRole('button', { name: /submit/i });
  const nameInput = screen.getByRole('textbox', { name: /guest name/i });

  userEvent.type(nameInput, 'Emma');
  userEvent.click(button);

  expect(await screen.findByText(/Not Emma?/i)).toBeInTheDocument();
});
