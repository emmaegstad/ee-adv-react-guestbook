import './Form.css';

function Form() {
  return (
    <form className="Form">
      <p className="form-text">Sign here!</p>
      <label>Guest Name</label>
      <input type="text"></input>
      <label>Guest Message</label>
      <textarea></textarea>
      <button>Submit</button>
    </form>
  );
}

export default Form;
