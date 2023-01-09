import React, { Component } from 'react';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  // handleNameChange = e => {
  //   this.setState({ name: e.currentTarget.value });
  // };

  // handleNumberChange = e => {
  //   this.setState({ number: e.currentTarget.value });
  // };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
        <h2>Contacts</h2>
      </div>
    );
  }
}
