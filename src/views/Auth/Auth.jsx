import './Auth.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { userInfo } from '../../utils/settings';

export default function Auth() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { setUser } = useUser();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === (process.env.REACT_APP_AUTH_USERNAME || userInfo.name) &&
      password === (process.env.REACT_APP_AUTH_PASSWORD || userInfo.password)
    ) {
      setUser({ name: username, password: password });
      setUsername('');
      setPassword('');
      history.replace('/');
    } else {
      alert("Oops, that didn't work. Please try again!");
    }
  };

  return (
    <div className="Auth">
      <label>
        Name:
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
      <button className="form-button" onClick={(e) => handleSubmit(e)}>
        SUBMIT
      </button>
    </div>
  );
}
