import './Entry.css';

function Entry({ name, message }) {
  return (
    <div className="Entry">
      <h3 className="entry-name">{name}</h3>
      <p className="entry-message">{message}</p>
    </div>
  );
}

export default Entry;
