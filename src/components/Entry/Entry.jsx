import './Entry.css';

function Entry({ name, message, id, handleDelete }) {
  return (
    <div className="Entry">
      <h3 className="entry-name">{name}</h3>
      <p className="entry-message">{message}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default Entry;
