import React, { Component } from 'react';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };

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
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Number
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.number}
              onChange={this.handleNumberChange}
            />
          </label>
        </form>
        <h2>Contacts</h2>
      </div>
    );
  }
}
