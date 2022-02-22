import './Auth.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { setUser } = useUser();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === process.env.REACT_APP_AUTH_USERNAME &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser({ name: username, password: password });
      setUsername('');
      setPassword('');
      history.replace('/');
    } else {
      console.log(process.env.REACT_APP_AUTH_USERNAME);
      console.log(process.env.REACT_APP_AUTH_PASSWORD);
    }
  };

  return (
    <div className="Auth">
      <label>
        Username:
        <input
          type="text"
          value={username || ''}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>
      <label>
        Password:
        <input
          value={password || ''}
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
}
