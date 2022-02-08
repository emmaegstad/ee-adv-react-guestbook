import './EntryList.css';
import Entry from '../Entry/Entry';
import { v4 as uuid } from 'uuid';

function EntryList(entries) {
  return (
    <div className="EntryList">
      {entries.entries.map((entry) => {
        return (
          <div key={uuid()}>
            <Entry name={entry.name} message={entry.message} />
          </div>
        );
      })}
    </div>
  );
}

export default EntryList;
