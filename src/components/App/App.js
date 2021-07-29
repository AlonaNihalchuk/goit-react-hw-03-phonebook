import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";

class App extends React.Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    if (
      this.state.contacts.find((contact) => contact.name === newContact.name)
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [{ ...newContact }, ...prevState.contacts],
    }));
    // console.log(this.state.contacts);
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  render() {
    return (
      <section className="phonebook">
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 className="contactsHead">Contacts </h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts
          contacts={this.getVisibleContact()}
          onDelete={this.deleteContact}
        />
      </section>
    );
  }
}

export default App;
