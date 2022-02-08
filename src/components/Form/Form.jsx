import './Form.css';

function Form() {
  return (
    <form className="Form">
      <h2 className="form-text">Sign here!</h2>
      <label>Guest Name</label>
      <input type="text"></input>
      <label>Guest Message</label>
      <textarea></textarea>
      <button>Submit</button>
    </form>
  );
}

export default Form;
