import { render, screen } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext/UserContext';
import EntryList from '../EntryList/EntryList';

test('should render entry upon submit', () => {
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
      <EntryList entries={entries} />
    </UserProvider>
  );

  const entryHeaders = screen.getAllByRole('heading');

  expect(entryHeaders).toHaveLength(3);
});
