import { render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import { EntryProvider } from '../../context/EntryContext';
import EntryList from '../EntryList/EntryList';

test('should render entry upon submit', async () => {
  const entries = [
    {
      name: 'Emma',
      message: 'Hello',
    },
    {
      name: 'Michelle',
      message: 'Hi',
    },
  ];

  render(
    <UserProvider>
      <EntryProvider>
        <EntryList entries={entries} />
      </EntryProvider>
    </UserProvider>
  );

  const entryHeaders = await screen.findAllByRole('heading');

  expect(entryHeaders).toHaveLength(3);
});
