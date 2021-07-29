import PropTypes from "prop-types";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./Form.module.css";

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };
  handleNameChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.formReset();
  };
  formReset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };
  randomId = uuidv4();
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={style.formSection}>
        <label className={style.formLabel}>
          Name{" "}
          <input
            onChange={this.handleNameChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className={style.formLabel}>
          Phone{" "}
          <input
            onChange={this.handleNameChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифер и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className={style.formBtn}>
          Save
        </button>
      </form>
    );
  }
}

export default Form;
