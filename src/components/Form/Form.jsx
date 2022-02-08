import './Form.css';
import { useState } from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import EntryList from '../EntryList/EntryList';

function Form() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [entries, setEntries] = useState([]);
  const { user, setUser } = useUser();

  function updateEntries() {
    if (!user) {
      setUser(name);
    }
    setEntries([...entries, { name, message }]);
    setMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntries();
  };

  const handleLogout = () => {
    setUser('');
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
          id="form-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button>Submit</button>
        {user && <span onClick={handleLogout}>Not {user}?</span>}
      </form>
      {entries && <EntryList entries={entries} name={user} />}
    </>
  );
}

export default Form;
