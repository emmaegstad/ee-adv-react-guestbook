import './Form.css';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useEntries } from '../../context/EntryContext';
import { addEntry } from '../../services/entries';
import EntryList from '../EntryList/EntryList';

function Form() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const { entries, setEntries } = useEntries([]);
  const { user, setUser } = useUser();

  const updateEntries = async () => {
    if (!user) {
      setUser(name);
    }
    await addEntry(name, message);
    setMessage('');
  };

  //   function updateEntries() {
  //     if (!user) {
  //       setUser(name);
  //     }
  //     setEntries([...entries, { name, message }]);
  //     setMessage('');
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntries();
  };

  const handleLogout = () => {
    setUser('');
    setName('');
  };

  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        {!user && (
          <>
            <h2 className="form-text">Sign Here</h2>
            <label className="form-label" htmlFor="form-name">
              Guest Name
            </label>
            <input
              className="form-input"
              type="text"
              id="form-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </>
        )}
        {user && <h2 className="form-text">Thanks for signing!</h2>}
        <label className="form-label" htmlFor="form-message">
          Guest Message
        </label>
        <textarea
          className="form-input"
          id="form-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="form-controls">
          <button className="form-button">SUBMIT</button>
          {user && (
            <span className="form-logout" onClick={handleLogout}>
              Not {user}?
            </span>
          )}
        </div>
      </form>
      {entries && <EntryList entries={entries} name={user} />}
    </>
  );
}

export default Form;
