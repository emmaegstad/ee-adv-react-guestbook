import './Header.css';
import { useUser } from '../../context/UserContext';

function Header() {
  const { user } = useUser();

  return (
    <div className="Header">
      <h1 className="header-title">Guestbook</h1>
      {user && <p className="header-text">Hello, {user.name}!</p>}
      {!user && <p className="header-text">Please sign the guestbook!</p>}
    </div>
  );
}

export default Header;
