import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ],
    filter: ''
  };

  handleSubmit = (event) => {
    event.preventDefault()

    const newUser = {
      'name': event.currentTarget.elements.name.value,
      'number': event.currentTarget.elements.number.value,
      'id': nanoid()
    }

    const userAlreadyExist = this.state.contacts.filter(contact => {
      return contact.name.toLocaleLowerCase() === newUser.name.toLocaleLowerCase()
    });

    if (userAlreadyExist.length !== 0) {
      alert(`${newUser.name} is already in contacts`);
      return
    }

    this.setState((prevState)=>{
      return { contacts: [...prevState.contacts, newUser] }
    })

    event.currentTarget.reset();
  }

  handleChangeData = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  handleFilter = () => {
    const filterData = this.state.filter.toLocaleLowerCase().trim();

    return this.state.contacts.filter(contact => 
      contact.name.toLocaleLowerCase().includes(filterData))
  }

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((element) => element.id !== id)
    }))
  }

  render() {
    const visibleContacts = this.handleFilter();

    return <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter inputValue={this.state.filter} onChangeData={this.handleChangeData} />
        <ContactList contacts={visibleContacts} deleteContact={this.handleDeleteContact} />
    </div>
  };
};

export default App;
