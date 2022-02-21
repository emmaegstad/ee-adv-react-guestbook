import './Entry.css';

function Entry({ name, message, id, handleDelete }) {
  return (
    <div className="Entry">
      <button className="entry-delete" onClick={() => handleDelete(id)}>
        ×
      </button>
      <div className="entry-fields">
        <h3 className="entry-name">{name}</h3>
        <p className="entry-message">{message}</p>
      </div>
    </div>
  );
}

export default Entry;
