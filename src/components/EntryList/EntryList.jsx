import './EntryList.css';
import Entry from '../Entry/Entry';
import { v4 as uuid } from 'uuid';
import { deleteEntry, getEntries } from '../../services/entries';
import { useEntries } from '../../context/EntryContext';

function EntryList(entries) {
  const { setEntries } = useEntries();

  const handleDelete = async (id) => {
    await deleteEntry(id);
    const data = await getEntries();
    setEntries(data);
  };

  return (
    <div className="EntryList">
      <h2 className="entry-list-title">Guest Entries</h2>
      {entries.entries.length === 0 && <p>Please enter a message!</p>}
      <div className="entry-list-entries">
        {entries.entries.map((entry) => {
          return (
            <div key={uuid()}>
              <Entry
                name={entry.name}
                message={entry.message}
                id={entry.id}
                handleDelete={handleDelete}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EntryList;
